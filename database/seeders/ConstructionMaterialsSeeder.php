<?php

namespace Database\Seeders;

use App\Models\Construction_material;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConstructionMaterialsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $construction_materials = [
            'brick',
            'panel',
            'wooden',
            'low-energy-demand'
        ];
    
        foreach ($construction_materials as $item) {
            $construction_material = new Construction_material();
            $construction_material->construction_material = $item;
            $construction_material->save();
        }
    }
}
