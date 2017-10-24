module.exports = class Student {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.interests = [];
    this.friends = [];
  }


  sayName() {
    console.log(`She is ${this.name}`);
  }

  makeFriendsWith(student) {
    this.friends.push(student);
    student.friends.push(this); // make relationship mutual
  }
};
