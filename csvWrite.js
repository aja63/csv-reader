const City = require('./Models/city');
const analyseCities = require('./createList');




processData = (err, data) => {
    if (err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }

    data.shift()
    const cityList = data.map(row => new City(...row));

    analyseCities(cityList);

};

module.exports = processData;