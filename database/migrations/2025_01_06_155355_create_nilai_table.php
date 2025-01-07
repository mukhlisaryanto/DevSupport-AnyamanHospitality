<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNilaiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nilai', function (Blueprint $table) {
            $table->id('id_nilai');
            $table->string('npm', 10);
            $table->string('kode_matakuliah', 6);
            $table->decimal('nilai', 3, 2);
            $table->tinyInteger('semester');
            $table->string('tahun_akademik', 9);
            $table->timestamps();

            $table->foreign('npm')->references('npm')->on('mahasiswa');
            $table->foreign('kode_matakuliah')->references('kode_matakuliah')->on('matakuliah');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nilai');
    }
}
