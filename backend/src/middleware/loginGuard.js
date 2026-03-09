// Bloqueo de cuenta tras N fallos consecutivos (en memoria).
// Rastrea tanto por username como por IP para cubrir ataques de enumeración.

const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60 * 1000; // 15 minutos
const MAX_IP_FAILURES = 15;      // más tolerante por IP (múltiples usuarios legítimos)

const byUsername = new Map();
const byIp = new Map();

function getRecord(map, key) {
  return map.get(key) || { count: 0, lockedUntil: null };
}

function checkLocked(map, key) {
  const rec = getRecord(map, key);
  if (!rec.lockedUntil) return false;
  if (Date.now() > rec.lockedUntil) {
    map.delete(key);
    return false;
  }
  return true;
}

function recordHit(map, key, max) {
  const rec = getRecord(map, key);
  rec.count += 1;
  if (rec.count >= max) {
    rec.lockedUntil = Date.now() + LOCK_MS;
  }
  map.set(key, rec);
}

// ── API pública ───────────────────────────────────────────────────────────────

function isLocked(username, ip) {
  return checkLocked(byUsername, username) || checkLocked(byIp, ip);
}

function recordFailure(username, ip) {
  recordHit(byUsername, username, MAX_FAILURES);
  if (ip) recordHit(byIp, ip, MAX_IP_FAILURES);
}

function recordSuccess(username, ip) {
  byUsername.delete(username);
  if (ip) byIp.delete(ip);
}

function remainingMs(username, ip) {
  const u = getRecord(byUsername, username);
  const i = ip ? getRecord(byIp, ip) : { lockedUntil: null };
  const uMs = u.lockedUntil ? Math.max(0, u.lockedUntil - Date.now()) : 0;
  const iMs = i.lockedUntil ? Math.max(0, i.lockedUntil - Date.now()) : 0;
  return Math.max(uMs, iMs);
}

module.exports = { isLocked, recordFailure, recordSuccess, remainingMs };
