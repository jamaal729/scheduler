// Print a variable with its value
// Usage:
// let printItem = "hello";
// consolePrint({ printItem });

function consolePrint(obj) {
  const name = Object.keys(obj)[0];
  return console.log(`${name}:  ${obj[name]}`);
}

module.exports = consolePrint;
