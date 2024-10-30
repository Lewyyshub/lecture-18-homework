const age = prompt("შეიყვანეთ თქვენი ასაკი");
const movieType = prompt("ჩვეულებრივი თუ 3D");
const timeOfTheDay = prompt("დილა თუ საღამო");
let price;
const discountCard = prompt("ფასდაკლების ბილეთი");

function AgeControl(age) {
  switch (true) {
    case age <= 10:
      price = 5;
      break;
    case age >= 10 && age <= 65:
      price = 15;
      break;
    case age > 65:
      price = 10;
      break;
    default:
      break;
  }
  return price;
}

function ExtraPrice(price, movieType, timeOfTheDay) {
  switch (true) {
    case movieType === "3D":
      price += 5;
    case timeOfTheDay === "საღამო":
      price += 5;
      break;
    default:
      break;
  }
  return price;
}

function DiscountCard(price, discountCard) {
  if (discountCard === "დიახ") {
    price = price - 5;
  }
  return price;
}

price = AgeControl(age);
price = ExtraPrice(price, movieType, timeOfTheDay);
price = DiscountCard(price, discountCard);

alert(`ბილეთის ფასი თქვენთვის არის : ${price} ლარი,`);
