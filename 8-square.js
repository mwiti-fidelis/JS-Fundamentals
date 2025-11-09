const arg = process.argv[2];

if (isNaN(arg) || arg === '' || arg === null || arg === undefined) {
    console.log("Missing size");
} else {
    const size = Number(arg);
    if (!Number.isInteger(size) || size <= 0) {
        console.log("Missing size");
    } else {
        for (let i = 0; i < size; i++) {
            let row = '';
            for (let j = 0; j < size; j++) {
                row += 'x';
            }
            console.log(row);
        }
    }
}
