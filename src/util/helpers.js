export const isTriangle = function (side1, side2, side3) {
    if (
        Number(side1) >= Number(side2) + Number(side3) ||
        Number(side2) >= Number(side1) + Number(side3) ||
        Number(side3) >= Number(side1) + Number(side2) ||
        Number(side1) <= 0 || !Number(side1) ||
        Number(side2) <= 0 || !Number(side2) ||
        Number(side3) <= 0 || !Number(side3)
    ) return false;

    return true;
}

export const determineType = function (side1, side2, side3) {
    let sides = [Number(side1), Number(side2), Number(side3)];

    if (!isTriangle(...sides)) {
        return 'Not Possible'
    }

    let uniqueSides = new Set(sides);

    if (uniqueSides.size === 1) {
        return 'Equilateral';
    } else if (uniqueSides.size === 2) {
        return 'Isosceles';
    } else {
        return 'Scalene';
    }
}

export const hasAllPositiveSides = function (side1, side2, side3) {
    if (
        Number(side1) <= 0 ||
        Number(side2) <= 0 ||
        Number(side3) <= 0 ||
        !Number(side1) ||
        !Number(side2) ||
        !Number(side3)
    ) return false;

    return true;
}
