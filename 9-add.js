function add(a, b) {
    return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (isNaN(arg1) || isNaN(arg2) || arg1 === '' || arg2 === '') {
    console.log("NaN");
} else {
    const num1 = Number(arg1);
    const num2 = Number(arg2);
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log("NaN");
    } else {
        console.log(add(num1, num2));
    }
}
