<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EstudianteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\estudiante::factory(200)->create();
    }
}
