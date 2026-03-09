// Encriptación AES-256-GCM en el cliente usando Web Crypto API nativa (sin dependencias).
// La clave se almacena solo en memoria — desaparece al cerrar la pestaña.

let _cryptoKey = null;

function assertCryptoAvailable() {
  if (typeof window === 'undefined' || !window.crypto?.subtle) {
    throw new Error(
      'Tu navegador no soporta Web Crypto API. Asegúrate de acceder por HTTPS.'
    );
  }
}

function hexToBytes(hex) {
  if (hex.length % 2 !== 0) {
    throw new Error('Hex string con longitud inválida.');
  }
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    if (isNaN(byte)) throw new Error('Hex string contiene caracteres inválidos.');
    bytes[i / 2] = byte;
  }
  return bytes;
}

function bytesToHex(bytes) {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Importa la clave hex recibida del servidor como CryptoKey AES-GCM no exportable
export async function setEncryptionKey(hexKey) {
  assertCryptoAvailable();
  const keyBytes = hexToBytes(hexKey);
  _cryptoKey = await window.crypto.subtle.importKey(
    'raw',
    keyBytes,
    { name: 'AES-GCM' },
    false,       // no exportable
    ['encrypt']
  );
}

export function clearEncryptionKey() {
  _cryptoKey = null;
}

// Encripta un string y devuelve { iv, ciphertext, tag } en hex
export async function encryptMessage(plaintext) {
  assertCryptoAvailable();
  if (!_cryptoKey) throw new Error('Clave de encriptación no disponible. Por favor inicia sesión de nuevo.');

  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV para GCM
  const encoded = new TextEncoder().encode(plaintext);

  const encrypted = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    _cryptoKey,
    encoded
  );

  // Web Crypto devuelve ciphertext + auth tag (16 bytes) concatenados
  const encryptedBytes = new Uint8Array(encrypted);
  const ciphertext = encryptedBytes.slice(0, -16);
  const tag = encryptedBytes.slice(-16);

  return {
    iv: bytesToHex(iv),
    ciphertext: bytesToHex(ciphertext),
    tag: bytesToHex(tag),
  };
}
