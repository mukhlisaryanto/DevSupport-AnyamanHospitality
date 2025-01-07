<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nilai;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
class ApiController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'nilai.*.npm' => 'required|string',
            'nilai.*.kodeMataKuliah' => 'required|string',
            'nilai.*.nilai' => 'required|numeric',
            'nilai.*.tahunAjaran' => 'required|string',
        ]);

        foreach ($data['nilai'] as $item) {
            Nilai::create([
                'npm' => $item['npm'],
                'kode_matakuliah' => $item['kodeMataKuliah'],
                'nilai' => $item['nilai'],
                'semester' => 1, // Sesuaikan jika ada
                'tahun_akademik' => $item['tahunAjaran'],
            ]);
        }

        return response()->json(['message' => 'Data berhasil ditambahkan'], 201);
    }

    public function index()
    {
        $nilai = Nilai::with(['mahasiswa', 'matakuliah'])->get();
        $matakuliah = Matakuliah::all();
        $mahasiswa = Mahasiswa::all();

        return response()->json([
            'nilai' => $nilai,
            'matakuliah' => $matakuliah,
            'mahasiswa' => $mahasiswa
        ]);
    }
}
