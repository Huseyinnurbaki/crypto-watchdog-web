export function getMinDiff(oldTime) {
  const now = new Date().getTime();
  const dateTime = new Date(oldTime).getTime()
  const diff = now - dateTime;
  const diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);
  return diffMins
}