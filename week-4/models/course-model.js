module.exports = class Course {
  constructor(id, subject, hours, instructor) {
    this.id = id;
    this.subject = subject;
    this.hours = hours;
    this.instructor = instructor;
  }
  //   courseDesc() {
  //     console.log(`You will become a ${this.subject} developer`);
  //   }
  static create(crs) {
    return new Course(crs.id, crs.subject, crs.hours, crs.instructor);
  }
};
