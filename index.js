const fs = require("fs");
const parse = require("csv-parse");
const write = require('./csvWrite');


let csvFile = "countries.csv";

/*const analyseCities = cityList => {
    console.log(cityList);
}*/

/*const processData = (err, data) => {
    if (err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }

    data.shift();

    const cityList = data.map(row => new City(...row));

    analyseCities(cityList);
}*/



/*fs.createReadStream(csvFile).pipe(parse({ delimiter: ',' }, processData));*/

write;

fs.createReadStream(csvFile).pipe(parse({ delimiter: ',' }, processData));