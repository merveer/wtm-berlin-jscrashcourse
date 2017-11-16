const fs = require('fs');

const StudentModel = require('../models/student-model');

const dbPath = `${__dirname}/../data.json`;

async function findAll() {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, file) => {
      if (err) return reject(err);

      const people = JSON.parse(file).map(StudentModel.create);
      resolve(people);
    });
  });
}

async function add(student) {
  const allPeople = await findAll();
  const lastPerson = allPeople[allPeople.length - 1];
  const lastPersonsId = lastPerson && lastPerson.id || 0;
  student.id = lastPersonsId + 1;

  student = StudentModel.create(student);
  allPeople.push(student);

  await saveAll(allPeople);

  return student;
}

async function del(personId) {
  const allPeople = await findAll();
  const personIndex = allPeople.findIndex(p => p.id == personId);
  if (personIndex < 0) return;

  allPeople.splice(personIndex, 1);

  saveAll(allPeople);
}

async function find(personId) {
  const allPeople = await findAll();

  return allPeople.find(p => p.id == personId);
}

async function saveAll(people) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(people), (err, file) => {
      if (err) return reject(err);

      resolve();
    });
  });
}

module.exports = {
  findAll,
  find,
  add,
  del,
};
