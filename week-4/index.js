const express = require('express');
const bodyParser = require('body-parser');
const StudentService = require('./services/student-service');
const CourseService = require('./services/course-service');
const CourseDb = require('./course_db');
const Database = require('./database');
const Course = require('./models/course-model');
const Student = require('./models/student-model');
// const red = require('ansi-red');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.render('index');
  //res.sendFile(`${__dirname  }/index.html`);
  // res.send(await StudentService.findAll());
});

app.get('/student/all', async (req, res, next) => {
  const student = await StudentService.findAll();
  res.render('student', {student});
});

app.get('/course/all', async (req, res, next) => {
  const course = await CourseService.findAll();
  res.render('course', {course});
});

app.post('/student', async (req, res, next) => {
  const addedStudent = await StudentService.add(req.body);
  res.send(addedStudent);   //axios.post('/student', {name: "enis"}).then(res => console.log(res.data))
});

app.post('/course', async (req, res, next) => {
  const addedCourse = await CourseService.add(req.body);
  res.send(addedCourse);   //axios.post('/student', {name: "enis"}).then(res => console.log(res.data))
});

app.listen(3000, () => {
  console.log('Server listening');
});

// const addAges = (age1, age2) => console.log(age1 + age2);
// const sayCity = (names, cities) => console.log(`${names} is from ${cities}`);

const firstStudent = new Student(0, 'Merve', 29, 'Ankara');
const secondStudent = new Student(1, 'Gulistan', 27, 'London');
const thirdStudent = new Student(2, 'Kubra', 25, 'Istanbul');

// firstStudent.makeFriendsWith(secondStudent);

const students = [firstStudent, secondStudent, thirdStudent];

const firstCourse = new Course(0, 'JS', 30, 'Armagan');
const secondCourse = new Course(1, 'CSS', 20, 'Yaprak');

const courses = [firstCourse, secondCourse];

/* console.log(firstCourse);
console.log(firstStudent);
console.log(firstStudent.name);
console.log(`${secondStudent.name} is from ${secondStudent.city}`); */

// addAges(firstStudent.age, thirdStudent.age);
// whichCity(secondStudent.name, secondStudent.city);

// whichCity(firstStudent.name, firstStudent.city);

// firstStudent.interests.push('Javascript', 'NodeJS');
// secondStudent.interests.push('HTML', 'MongoDB');
/* console.log(`${firstStudent.name} is interested in ${firstStudent.interests}`); */

// courses[1].courseDesc();
// firstCourse.courseDesc();

/* const printName = student => student.sayName();
students.forEach(printName); */

// console.log(students[1].friends);

Database.save(students, (err) => {
  console.log('Your db is now async');
});
CourseDb.save(courses, (err) => {
  console.log('Your course database is now async');
});

// const loadedFile = Database.load();
// console.log(loadedFile[0].city);

// const studentsFromDb = loadedFile.map(Student.create);
// studentsFromDb[0].sayName();
