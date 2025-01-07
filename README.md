Berikut adalah contoh struktur database MySQL untuk tabel mahasiswa, matakuliah, dan nilai:

\# Struktur Tabel

\*Tabel Mahasiswa\*

\```

CREATE TABLE mahasiswa (

`  `npm VARCHAR(10) PRIMARY KEY,

`  `nama VARCHAR(50) NOT NULL,

`  `jurusan VARCHAR(30) NOT NULL,

`  `tanggal\_lahir DATE NOT NULL,

`  `alamat TEXT

);

\```

\*Tabel Matakuliah\*

\```

CREATE TABLE matakuliah (

`  `kode\_matakuliah VARCHAR(6) PRIMARY KEY,

`  `nama\_matakuliah VARCHAR(50) NOT NULL,

`  `sks TINYINT NOT NULL

);

\```

\*Tabel Nilai\*

\```

CREATE TABLE nilai (

`  `id\_nilai INT AUTO\_INCREMENT PRIMARY KEY,

`  `npm VARCHAR(10) NOT NULL,

`  `kode\_matakuliah VARCHAR(6) NOT NULL,

`  `nilai DECIMAL(3,2) NOT NULL,

`  `semester TINYINT NOT NULL,

`  `tahun\_akademik VARCHAR(9) NOT NULL,

`  `FOREIGN KEY (npm) REFERENCES mahasiswa(npm),

`  `FOREIGN KEY (kode\_matakuliah) REFERENCES matakuliah(kode\_matakuliah)

);

\```

\# Penjelasan

1\. Tabel `mahasiswa` memiliki atribut:

\- `npm`: Nomor Pokok Mahasiswa (primary key)

\- `nama`: Nama mahasiswa

\- `jurusan`: Jurusan mahasiswa

\- `tanggal\_lahir`: Tanggal lahir mahasiswa

\- `alamat`: Alamat mahasiswa

2\. Tabel `matakuliah` memiliki atribut:

\- `kode\_matakuliah`: Kode matakuliah (primary key)

\- `nama\_matakuliah`: Nama matakuliah

\- `sks`: Jumlah Satuan Kredit Semester (SKS)

3\. Tabel `nilai` memiliki atribut:

\- `id\_nilai`: ID nilai (primary key, auto increment)

\- `npm`: Nomor Pokok Mahasiswa (foreign key ke tabel `mahasiswa`)

\- `kode\_matakuliah`: Kode matakuliah (foreign key ke tabel `matakuliah`)

\- `nilai`: Nilai mahasiswa

\- `semester`: Semester

\- `tahun\_akademik`: Tahun akademik

\# Contoh Data

\*Tabel Mahasiswa\*

| npm | nama | jurusan | tanggal\_lahir | alamat |

\| --- | --- | --- | --- | --- |

| 1234567890 | John Doe | Teknik Informatika | 1995-01-01 | Jl. ABC No. 123 |

\*Tabel Matakuliah\*

| kode\_matakuliah | nama\_matakuliah | sks |

\| --- | --- | --- |

| IF101 | Algoritma | 3 |

| IF102 | Struktur Data | 3 |

\*Tabel Nilai\*

| id\_nilai | npm | kode\_matakuliah | nilai | semester | tahun\_akademik |

\| --- | --- | --- | --- | --- | --- |

| 1 | 1234567890 | IF101 | 85.00 | 1 | 2022/2023 |

| 2 | 1234567890 | IF102 | 90.00 | 2 | 2022/2023 |

**Pertanyaan:**

1. Buatlah Web Service API POST DATA Insert Tbl Nilai Menggunakan PHP Laravel Dengan Request Body Seperti Dibawah Ini

   `	`{

   `	`nilai:[

   `			`{

   `			`npm:?,

   `			`kodeMataKuliah:?,

   `			`nilai:?,

   `			`tahunAjaran:?,

   `			`},

   `			`{

   `			`npm:?,

   `			`kodeMataKuliah:?,

   `			`nilai:?,

   `			`tahunAjaran:?,

   `			`}

   `		`]

   `	`}

2. Buatlah Web Service API GET DATA Menggunakan PHP Laravel Dengan Respon Body Seperti Dibawah Ini

   `	`{

   `	`nilai:[

   `			`{

   `			`npm:?,

   `			`namaMahasiswa

   `			`kodeMataKuliah:?,

   `			`nilai:?,

   `			`tahunAjaran:?

   `			`}

   `	`]

   `	`matakuliah:[

   `		`{

   `			`kodeMatakuliah:?,

   `			`namaMatakuliah:?,

   `			`sks:?,

   `		`},

   `		`{

   `			`kodeMatakuliah:?,

   `			`namaMatakuliah:?,

   `			`sks:?,

   `		`}

   `	`]

   `	`mahasiswa:{

   `		`nama:?,

   `		`npm:?,

   `		`jurusan:?,

   `		`tanggalLahir:?,

   `	`}

   `	`}

3. Buatlah array  find/filter dengan key nama mahasiswa dari data array respon json no 2 menggunakan javascript
3. Buatlah array data sort dari key nama mahasiswa dari array respon json no 2 menggunakan javascript

