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
