import type {RegisterUserData} from '../types/interfaces';

function conversion(value: RegisterUserData) {
  if (value.sex === 'F') {
    let kcal =
      (665 + 9.6 * value.weight + 1.8 * value.height - 4.7 * value.age) * 1.4;
    if (value.goal === 'L') {
      kcal = kcal - 300;
    } else if (value.goal === 'G') {
      kcal = kcal + 300;
    }

    let fat = (kcal * 0.3) / 9;
    let protein = (kcal * 0.2) / 4;
    let carbohydrates = (kcal * 0.5) / 4;

    value.fat = Math.floor(fat);
    value.carbohydrates = Math.floor(carbohydrates);
    value.protein = Math.floor(protein);
    value.kcal = Math.floor(kcal);

    return value;
  } else {
    let kcal =
      (66 + 13.7 * value.weight + 5 * value.height - 6.8 * value.age) * 1.4;

    if (value.goal === 'L') {
      kcal = kcal - 400;
    } else if (value.goal === 'G') {
      kcal = kcal + 400;
    }
    let fat = (kcal * 0.3) / 9;
    let protein = (kcal * 0.2) / 4;
    let carbohydrates = (kcal * 0.5) / 4;

    value.fat = Math.floor(fat);
    value.carbohydrates = Math.floor(carbohydrates);
    value.protein = Math.floor(protein);
    value.kcal = Math.floor(kcal);
    return value;
  }
}

export {conversion};
