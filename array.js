//array -> digunakan utk menyimpan banyak data berurutan dengan index, index dimulai dari nol

// const product1 = "Laptop";
// const product2 = "Mouse";
// const product3 = "Keyboard";

// const products = ["Laptop", "Mouse", "Keyboard"];

// //filter data, searching, manipulasi

// //sistem inventory toko online
// const productNames = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// //akses produk
// console.log(productNames[0]);

// //mengecek total produk
// console.log("Total produk", productNames.length);

// //tambah produk
// productNames.push("Headset");

// //hapus produk
// productNames.shift();

// //param 1: index
// //param 2: jumlah data
// productNames.splice(1, 2);
// console.log(productNames);

//Array of object

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 15000000,
//     stock: 10,
//     category: "Electronics",
//   },
//   {
//     id: 2,
//     name: "Mouse",
//     price: 50000,
//     stock: 100,
//     category: "Electronics",
//   },
//   {
//     id: 3,
//     name: "Keyboard",
//     price: 300000,
//     stock: 50,
//     category: "Electronics",
//   },
//   {
//     id: 4,
//     name: "Mouse Pad",
//     price: 10000,
//     stock: 1,
//     category: "Non-electronics",
//   },
// ];

// //mengakses produk pertama
// // console.log(products[0]);
// //mengakses nama produk pertama
// console.log(products[0].name);

const products = [
  { id: 1, name: "Laptop", price: 5000000, stock: 10, category: "Electronics" },
  { id: 2, name: "Mouse", price: 150000, stock: 50, category: "Electronics" },
  {
    id: 3,
    name: "Keyboard",
    price: 300000,
    stock: 30,
    category: "Electronics",
  },
  { id: 4, name: "Notebook", price: 15000, stock: 100, category: "Stationery" },
];

// c masukin data ke array: push, unshift, etc
// r find()
// u
// d

//mencari 1 item spesifik, mencari id = 4

//looping = mengulangi baris code selama kondisi memenuhi
// for loop = nilai awal, kondisi perulangan, iterasi

//algorima
// 1. lakukan perulangan semua data di dalam array V
// 2. pada setiap iterasi cari yang id = 4 V
// 3. jika ditemukan tampilkan ke console

function findProductLoop(idParam) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === idParam) {
      return products[i]; //kalau ketemu langsung return
    }
  }
  return undefined; //tidak ketemu
}

const result = findProductLoop(5);
console.log(result);

//find() -> mengembalikan data pertama yg sesuai kondisi
const result1 = products.find((item) => item.id === 4);
console.log(result1);

//kapan digunakan? validasi duplikasi data

//latihan
// const students = [
//   { studentId: "001", name: "Alice", score: 85 },
//   { studentId: "002", name: "John", score: 70 },
//   { studentId: "003", name: "Clara", score: 90 },
//   { studentId: "004", name: "Deni", score: 65 },
// ];

// 1. cari sudent yang idnya 003
// 2. tampilin semua student yang nilai >= 75
// 3. hitung total nilai semua student-