// //object -> menyimpan banyak data dalam bentuk key-value

// const name1 = "Jon";
// const age1 = 19;
// const email1 = "jon@email.com";

// const name2 = "Bro";
// const age2 = 29;
// const email2 = "brow@email.com";

// const user1 = { name: "Jon", age: 19, email: "jon@email.com" };
// const user2 = { name: "Bro", age: 29, email: "bro@email.com" };

// const student = {
//   names: "Jon Snow",
//   studentId: "12345",
//   gpa: 3.5,
//   isActive: true,

//   //method
//   printInfo: function () {
//     console.log("Student name: ", this.names);
//     console.log("Student gpa: ", this.gpa);
//   },
// };

//mengakses property
// console.log(student.name);
// console.log(student["studentId"]);

//menambahkan property
// student.email = "jon@email.com";

// //merubah property
// student.gpa = 3.9;

// //menghapus property
// delete student.isActive

// console.log(student);

//function/fungsi : ngebungkus baris code
// student.printInfo();

const student = {
  names: "Jon Snow",
  gpa: 3.5,
  courses: [],

  addCourse: function (courseName) {
    this.courses.push(courseName);
    console.log(`Course ${courseName} succesfully added for ${this.names} `);
  },
};

student.addCourse("Math");

console.log(student);


