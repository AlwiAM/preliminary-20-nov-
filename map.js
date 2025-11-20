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

//buatkan object studentSystem, didalamnya
// 1. buatkan property data[] tempat menampung student
// 2. buat addStudent(studentId, name, gpa) -> validasi
// 3. buat findByName(name) -> mencari student yang namanya mengandung keyword tertentu
// 4. calculateAverageGPA() ->ngitung rata2 ipk semua student

const studentSystem = {
  data: [],

  add: function (nim, name, ipk) {
    // Validasi duplikasi
    const alreadyExists = this.data.find((mhs) => student.studentId === nim);
    if (alreadyExists) {
      throw new Error(`Student dengan studentId ${nim} sudah terdaftar.`);
    }

    // Tambahkan ke data
    this.data.push({ nim, name, ipk });
    console.log(`Student ${name} berhasil ditambahkan.`);
  },

  cariByNama: function (keyword) {
    const result = this.data.filter((student) =>
      student.name.toLowerCase().includes(keyword.toLowerCase())
    );
    return result;
  },

  calculateAverageGPA: function () {
    if (this.data.length === 0) return 0;

    const totalIPK = this.data.reduce((sum, mhs) => sum + student.gpa, 0);
    return totalIPK / this.data.length;
  },
};

// Test
try {
  studentSystem.add("001", "John Smith", 3.5);
  studentSystem.add("002", "Clara Diana", 3.8);
  studentSystem.add("003", "Michael Chen", 3.2);

  console.log("Cari 'John':", studentSystem.cariByNama("John"));
  // Output: [{ studentId: "001", name: "John Smith", gpa: 3.5 }, { studentId: "003", name: "Michael Chen", gpa: 3.2 }]

  console.log("Rata-rata IPK:", studentSystem.calculateAverageGPA());
  // Output: 3.5

  studentSystem.add("001", "Test", 3.0); // Error!
} catch (error) {
  console.log(error.message);
}
