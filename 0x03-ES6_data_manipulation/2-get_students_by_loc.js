export default function (arr, city) {
  if (!Array.isArray(arr)) return [];
  return arr.filter((item) => item.location === city);
}
