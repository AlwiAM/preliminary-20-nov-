//map -> mentransformasi array jadi array baru dengan struktur berbeda

const products = [
  { id: 1, name: "Laptop", price: 8000000, stock: 10 },
  { id: 2, name: "Mouse", price: 150000, stock: 50 },
  { id: 3, name: "Keyboard", price: 500000, stock: 30 },
];

// ambil name saja
const productNames = products.map((item) => item.name);
console.log(productNames);

//hitung harga dengan dikson 10%
const discountedProduct = products.map((item) => {
  return {
    name: item.name,
    originPrice: item.price,
    discountedPrice: item.price * 0.9,
  };
});
console.log(discountedProduct);


//buatkan object studentSystem
// 1. buatkan property data[]
// 2. buat addStudent(studentId, name, gpa) -> validasi
// 3. buat findByName(name) -> mencari student yang namanya mengandung keyword tertentu
// 4. calculateAverageGPA() ->ngitung rata2 ipk semua student