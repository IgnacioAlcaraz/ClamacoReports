const crypto = require('crypto');

// Deriva una clave AES-256 única por usuario a partir del ENCRYPTION_KEY maestro.
// Stateless: la misma clave se puede re-derivar en cualquier momento sin almacenarla.
function deriveUserKey(username) {
  const masterKey = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  return crypto.createHmac('sha256', masterKey).update(username).digest(); // 32 bytes
}

// Desencripta un payload { iv, ciphertext, tag } con AES-256-GCM.
function decrypt({ iv, ciphertext, tag }, username) {
  const key = deriveUserKey(username);
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    key,
    Buffer.from(iv, 'hex')
  );
  decipher.setAuthTag(Buffer.from(tag, 'hex'));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(ciphertext, 'hex')),
    decipher.final(),
  ]);
  return decrypted.toString('utf8');
}

// Retorna la clave derivada en hex para enviarla al cliente tras el login.
function getUserKeyHex(username) {
  return deriveUserKey(username).toString('hex');
}

module.exports = { decrypt, getUserKeyHex };
