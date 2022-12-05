function conversion(value) {
    if (value.sex === 'F') {
        let kcal =
            (665 +
                9.6 * parseFloat(value.weight) +
                1.8 * parseFloat(value.height) -
                4.7 * parseFloat(value.age)) *
            1.4;
        if (value.goal === 'L') {
            kcal = kcal - 300;
        } else if (value.goal === 'G') {
            kcal = kcal + 300;
        }

        let fat = (kcal * 0.3) / 9;
        let protein = (kcal * 0.2) / 4;
        let carbohydrates = (kcal * 0.5) / 4;

        value.fat = parseInt(fat);
        value.carbohydrates = parseInt(carbohydrates);
        value.protein = parseInt(protein);
        value.kcal = parseInt(kcal);

        return value
    } else {
        let kcal =
            (66 +
                13.7 * parseFloat(value.weight) +
                5 * parseFloat(value.height) -
                6.8 * parseFloat(value.age)) *
            1.4;

        if (value.goal === 'L') {
            kcal = kcal - 400;
        } else if (value.goal === 'G') {
            kcal = kcal + 400;
        }
        let fat = (kcal * 0.3) / 9;
        let protein = (kcal * 0.2) / 4;
        let carbohydrates = (kcal * 0.5) / 4;

        value.fat = parseInt(fat);
        value.carbohydrates = parseInt(carbohydrates);
        value.protein = parseInt(protein);
        value.kcal = parseInt(kcal);

        return value
    }
}

export { conversion }