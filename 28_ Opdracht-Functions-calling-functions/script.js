/*const checkAge = function (age) {
  console.log("entering checkAge..");
  console.log(age);
  if (age > 17) {
    return true;
  }
  return false;
};

const greets = function (age) {
  console.log("entering greets");
  console.log(age);
  if (age == false) {
    return "Hey kiddo";
  }
  return "Hello there";
};

const complete = function (age) {
  console.log("entering complete");
  console.log(age);
  const ageNumber = checkAge(age);
  const adult = greets(ageNumber);
  return adult;
};

console.log(complete(17));

const price = function (basePrice) {
  console.log("enteringPrice");
  const inclVAT = basePrice * 1.09;
  console.log("output: ", inclVAT);
  return inclVAT;
};

const VATCalculation = function (basePrice) {
  console.log("enteringVAT");
  console.log(basePrice);
  const base = price(basePrice) / 1.09;
  const onlyVAT = price(basePrice) - base;
  return onlyVAT;
};
console.log(VATCalculation(2)); */

const calculateBasePrice = function (price) {
  const basePrice = price / 1.21;
  return basePrice;
};

const calculatevatPrice = function (price) {
  const basePrice = calculateBasePrice(price);
  const vatPrice = (basePrice / 100) * 21;
  return vatPrice;
};

console.log(calculatevatPrice(1210), calculateBasePrice(1210));
