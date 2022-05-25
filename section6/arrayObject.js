const student = {
  firstName: "Felipe",
  lastName: "Ogata",
  strenghts: ["Music", "Philosophy", "Math"],
  exams: {
    midturn: 99,
    final: 85,
  },
};

// para acessar
const avg = (student.exams.midturn + student.exams.final) / 2;
console.log(student.exams.midturn);

const shoppingCart = [
  {
    product: "Jenga",
    price: 19.99,
  },
  {
    product: "Lego",
    price: 3.2,
  },
  {
    product: "Tennis Ball",
    price: 1.99,
  },
];
