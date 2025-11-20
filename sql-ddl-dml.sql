-- ============================================================================
-- PART 1: CREATE TABLE (DDL)
-- ============================================================================
-- Buat tabel pelanggan
CREATE TABLE pelanggan (
    pelanggan_id SERIAL PRIMARY KEY,
    nama VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    kota VARCHAR(30) DEFAULT 'Jakarta',
    tanggal_daftar DATE DEFAULT CURRENT_DATE
);

-- Buat tabel produk
CREATE TABLE produk (
    produk_id SERIAL PRIMARY KEY,
    nama_produk VARCHAR(50) NOT NULL,
    kategori VARCHAR(30) NOT NULL,
    harga INTEGER NOT NULL CHECK (harga > 0),
    stok INTEGER DEFAULT 0 CHECK (stok >= 0)
);

-- Buat tabel pesanan
CREATE TABLE pesanan (
    pesanan_id SERIAL PRIMARY KEY,
    pelanggan_id INTEGER NOT NULL,
    produk_id INTEGER NOT NULL,
    jumlah INTEGER NOT NULL CHECK (jumlah > 0),
    tanggal_pesan DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (pelanggan_id) REFERENCES pelanggan(pelanggan_id),
    FOREIGN KEY (produk_id) REFERENCES produk(produk_id)
);

-- Cek struktur tabel (PostgreSQL)
-- \d pelanggan
-- \d produk
-- \d pesanan


-- ============================================================================
-- PART 2: INSERT DATA (DML)
-- ============================================================================

-- Insert data pelanggan (satu per satu)
INSERT INTO pelanggan (nama, email, kota)
VALUES ('Budi Santoso', 'budi@mail.com', 'Jakarta');

INSERT INTO pelanggan (nama, email, kota)
VALUES ('Siti Aminah', 'siti@mail.com', 'Bandung');

-- Insert multiple rows sekaligus
INSERT INTO pelanggan (nama, email, kota) VALUES
('Ahmad Fauzi', 'ahmad@mail.com', 'Surabaya'),
('Rina Wati', 'rina@mail.com', 'Jakarta'),
('Dewi Lestari', 'dewi@mail.com', 'Medan');

-- Insert data produk
INSERT INTO produk (nama_produk, kategori, harga, stok) VALUES
('Laptop ASUS', 'Elektronik', 8000000, 10),
('Mouse Logitech', 'Elektronik', 150000, 50),
('Keyboard Mechanical', 'Elektronik', 500000, 30),
('Monitor LG 24"', 'Elektronik', 2000000, 15),
('Meja Kantor', 'Furniture', 1500000, 5),
('Kursi Gaming', 'Furniture', 2500000, 8);

-- Insert data pesanan
INSERT INTO pesanan (pelanggan_id, produk_id, jumlah, tanggal_pesan) VALUES
(1, 1, 2, '2025-01-10'),
(2, 2, 5, '2025-01-10'),
(3, 4, 1, '2025-01-11'),
(1, 3, 3, '2025-01-11'),
(4, 1, 1, '2025-01-12'),
(5, 5, 2, '2025-01-12'),
(2, 6, 1, '2025-01-12');
