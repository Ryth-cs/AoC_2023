const fileData = await Bun.file("day_one/actual.txt").text();
console.log(fileData);
const lines = fileData.split("\n");
console.log(lines);

const toBeSummed: number[] = [];

lines.forEach((line) => {
  //   console.log(line);

  const firstVal = findFirstNumber(line);
  const lastVal = findLastNumber(line);

  //   console.log(firstVal, lastVal);
  toBeSummed.push(Number(`${firstVal}${lastVal}`));
});

console.log(toBeSummed);
console.log(
  "Total",
  toBeSummed.reduce(function (a, b) {
    return a + b;
  }),
);

function findFirstNumber(str: string): string {
  for (const char of str) {
    if (!Number.isNaN(Number(char))) {
      return char;
    }
  }
  return "";
}

function findLastNumber(str: string): string {
  for (let i = str.length - 1; i >= 0; i--) {
    if (!Number.isNaN(Number(str[i]))) {
      return str[i];
    }
  }
  return "";
}
