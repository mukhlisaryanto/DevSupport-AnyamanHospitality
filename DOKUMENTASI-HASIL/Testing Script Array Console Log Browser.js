const response = {
    nilai: {
        "nilai": [
            {
                "id_nilai": 24,
                "npm": "1234567890",
                "kode_matakuliah": "IF101",
                "nilai": "8.50",
                "semester": 1,
                "tahun_akademik": "2022/2023",
                "mahasiswa": {
                    "npm": "1234567890",
                    "nama": "John Doe",
                    "jurusan": "Teknik Informatika",
                    "tanggal_lahir": "1995-01-01",
                    "alamat": "Jl. ABC No. 123"
                }
            },
            {
                "id_nilai": 25,
                "npm": "1234567890",
                "kode_matakuliah": "IF102",
                "nilai": "9.00",
                "semester": 2,
                "tahun_akademik": "2022/2023",
                "mahasiswa": {
                    "npm": "1234567890",
                    "nama": "John Doe",
                    "jurusan": "Teknik Informatika",
                    "tanggal_lahir": "1995-01-01",
                    "alamat": "Jl. ABC No. 123"
                }
            }
        ]
    }
};

const filtered = response.nilai.nilai.filter(item => item.mahasiswa.nama === "John Doe");
console.log('Filtered Data:', filtered);

const sorted = [...response.nilai.nilai].sort((a, b) =>
    a.mahasiswa.nama.localeCompare(b.mahasiswa.nama)
);
console.log('Sorted Data:', sorted);
