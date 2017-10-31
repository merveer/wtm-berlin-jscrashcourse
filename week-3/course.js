module.exports = class Course {
  constructor(subject, hours, instructor) {
    this.subject = subject;
    this.hours = hours;
    this.instructor = instructor;
  }
  courseDesc() {
    console.log(`You will become a ${this.subject} developer`);
  }
};
