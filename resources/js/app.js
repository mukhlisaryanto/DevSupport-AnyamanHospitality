require('./bootstrap');

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
                "created_at": null,
                "updated_at": null,
                "mahasiswa": {
                    "npm": "1234567890",
                    "nama": "John Doe",
                    "jurusan": "Teknik Informatika",
                    "tanggal_lahir": "1995-01-01",
                    "alamat": "Jl. ABC No. 123",
                    "created_at": null,
                    "updated_at": null
                },
                "matakuliah": {
                    "kode_matakuliah": "IF101",
                    "nama_matakuliah": "Algoritma",
                    "sks": 3,
                    "created_at": null,
                    "updated_at": null
                }
            },
            // Data lainnya...
        ],
        "matakuliah": [
            {
                "kode_matakuliah": "IF101",
                "nama_matakuliah": "Algoritma",
                "sks": 3,
                "created_at": null,
                "updated_at": null
            },
            {
                "kode_matakuliah": "IF102",
                "nama_matakuliah": "Struktur Data",
                "sks": 3,
                "created_at": null,
                "updated_at": null
            }
        ],
        "mahasiswa": [
            {
                "npm": "1234567890",
                "nama": "John Doe",
                "jurusan": "Teknik Informatika",
                "tanggal_lahir": "1995-01-01",
                "alamat": "Jl. ABC No. 123",
                "created_at": null,
                "updated_at": null
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
