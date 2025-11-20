//validasi -> memastikan logika program sesuai tujuan

//case: fungsi untuk menambahkan daftar student yg mana nim tidak boleh duplikat

const studentList = [{ studentId: "001", name: "Clara" }];
// {studentId: 12345, name: aldi}

function addStudent(studentId, name) {
  //validasi cek ada tidaknya studentid
  const alreadyExists = studentList.find(
    (student) => student.studentId === studentId
  );

  // throw -> melemparkan eror
  // try -> area yang mungkin bisa eror
  // catch -> menangkap eror yang

  if (alreadyExists) {
    throw new Error(`Student dengan studentId ${studentId} sudah terdaftar`);
  }
  //jika student blm ada maka:
  studentList.push({ studentId, name });
  console.log(`Student ${name} berhasil ditambahkan`);
}

try {
  addStudent("002", "Yayan");
  addStudent("001", "Aryo");
} catch (error) {
  console.log(error.message);
}

try {
  console.log(studentList);
} catch (error) {
  console.log(error.message);
}

//buatin function calculateDiscount(price, discountPercent)
// 1. validasi: price harus > 0
// 2. validasi dikson rentang 1-100
// 3. kalau validasi gagal throw Error
// 4. kalau valid, hitung dan return price setelah dikson

// finalPrice = price - (price * discountPercent /100)

function calculateDiscount(price, discountPercent) {
  // 1. Validasi price harus positif
  if (price <= 0) {
    throw new Error("Harga harus lebih dari 0");
  }

  // 2. Validasi diskon antara 0-100
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Diskon harus antara 0-100");
  }

  // PROSES (setelah validasi aman)

  // 3. Hitung nilai diskon
  const discountValue = (price * discountPercent) / 100;

  // 4. Hitung price akhir
  const finalPrice = price - discountValue;

  // 5. Return result
  return finalPrice;
}

// Test
try {
  console.log(calculateDiscount(100000, 20)); // 80000
  console.log(calculateDiscount(50000, 10)); // 45000
  console.log(calculateDiscount(-500, 10)); // Error!
} catch (error) {
  console.log("ERROR:", error.message);
}
