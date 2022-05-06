const sumAll = function (a, b) {
  if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }
  let temp;
  let total = 0;
  if (a > b) {
    temp = b;
    b = a;
    a = temp;
  }

  for (let i = a; i <= b; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
