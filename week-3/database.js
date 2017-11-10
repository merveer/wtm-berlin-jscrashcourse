const fs = require('fs');

exports.save = (people, cb) => {
  fs.writeFile('./data.json', JSON.stringify(people), cb);
};

exports.load = () => JSON.parse(fs.readFile('./data.json', 'utf8'));
