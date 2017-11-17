const fs = require('fs');

const CourseModel = require('../models/course-model');

const dbPath = `${__dirname}/../coursedata.json`;

async function findAll() {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, file) => {
      if (err) return reject(err);

      const course1 = JSON.parse(file).map(CourseModel.create);
      resolve(course1);
    });
  });
}

async function add(course) {
  const allCourse = await findAll();
  const lastCourse = allCourse[allCourse.length - 1];
  const lastCourseId = lastCourse && lastCourse.id || 0;
  course.id = lastCourseId + 1;

  course = CourseModel.create(course);
  allCourse.push(course);

  await saveAll(allCourse);

  return course;
}

async function del(courseId) {
  const allCourse = await findAll();
  const personIndex = allCourse.findIndex(c => c.id == courseId);
  if (personIndex < 0) return;

  allCourse.splice(personIndex, 1);

  saveAll(allCourse);
}

async function find(courseId) {
  const allCourse = await findAll();

  return allCourse.find(c => c.id == courseId);
}

async function saveAll(course) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(course), (err, file) => {
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
