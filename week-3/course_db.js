const fs = require('fs');

exports.save = (course, cb) => {
  fs.writeFile('./coursedata.json', JSON.stringify(course), cb);
};

exports.load = () => JSON.parse(fs.readFile('./coursedata.json', 'utf8'));
