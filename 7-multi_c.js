const arg = process.argv[2];

if (isNaN(arg) || arg === '' || arg === null || arg === undefined) {
    console.log("Missing number of occurrences");
} else {
    const times = Number(arg);
    if (!Number.isInteger(times) || times < 0) {
        console.log("Missing number of occurrences");
    } else {
        for (let i = 0; i < times; i++) {
            console.log("C is fun");
        }
    }
}
