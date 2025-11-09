// 5-to_integer.js
const arg = process.argv[2];

if (isNaN(arg) || arg === '' || arg === null || arg === undefined) {
    console.log("Not a number");
} else {
    const num = Number(arg);
    if (Number.isInteger(num)) {
        console.log(`My number: ${num}`);
    } else {
        console.log("Not a number");
    }
}
