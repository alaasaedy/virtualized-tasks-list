export function truncateStr(str) {
  if (str.length > 200) {
    return str.slice(0, 200) + '...';
  }
  return str;
}
