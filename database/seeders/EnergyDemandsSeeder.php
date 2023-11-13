<?php

namespace Database\Seeders;

use App\Models\Energy_demand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EnergyDemandsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $energy_demands = [
            'A', 
            'B', 
            'C',
            'D', 
            'E', 
            'F', 
            'G'
        ];
    
        foreach ($energy_demands as $item) {
            $energy_demand = new Energy_demand();
            $energy_demand->energy_demand = $item;
            $energy_demand->save();
        }
    }
}
