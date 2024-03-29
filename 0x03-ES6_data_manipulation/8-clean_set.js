export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  if (!startString) return '';

  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
