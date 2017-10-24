const fs = require('fs');

exports.save = (people) => {
  fs.writeFileSync('./data.json', JSON.stringify(people));
};
