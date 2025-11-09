const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
    if (index === 2) {
        console.log(val);
   }else {
        console.log("No argument")
   }

});
