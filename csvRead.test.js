const fs = require("fs");
const parse = require("csv-parse");
const reader = require('./csvReader');
const writer = require('./csvWrite');
const city = require('./Models/city');

let csvFile = "countries.csv";

test('Can read csv', () => {

});