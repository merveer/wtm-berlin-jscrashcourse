const Database = require('./database');
const Course = require('./course');
const Student = require('./student');
//const red = require('ansi-red');

const addAges = (age1, age2) => console.log(age1 + age2);
const sayCity = (names, cities) => console.log(`${names} is from ${cities}`);

const firstStudent = new Student('Merve', 29, 'Ankara');
const secondStudent = new Student('Gulistan', 27, 'London');
const thirdStudent = new Student('Kubra', 25, 'Istanbul');

// firstStudent.makeFriendsWith(secondStudent);

const students = [firstStudent, secondStudent, thirdStudent];

const firstCourse = new Course('JS', 30, 'Armagan');
const secondCourse = new Course('CSS', 20, 'Yaprak');

const courses = [firstCourse, secondCourse];

/* console.log(firstCourse);
console.log(firstStudent);
console.log(firstStudent.name);
console.log(`${secondStudent.name} is from ${secondStudent.city}`); */

// addAges(firstStudent.age, thirdStudent.age);
// whichCity(secondStudent.name, secondStudent.city);

// whichCity(firstStudent.name, firstStudent.city);

firstStudent.interests.push('Javascript', 'NodeJS');
secondStudent.interests.push('HTML', 'MongoDB');
/* console.log(`${firstStudent.name} is interested in ${firstStudent.interests}`); */

// courses[1].courseDesc();
// firstCourse.courseDesc();

/* const printName = student => student.sayName();
students.forEach(printName); */

// console.log(students[1].friends);

Database.save(students);

const loadedFile = Database.load();
console.log(loadedFile[0].city);
