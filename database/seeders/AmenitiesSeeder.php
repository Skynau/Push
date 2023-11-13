<?php

namespace Database\Seeders;

use App\Models\Amenity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AmenitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $amenities = [
            'Balacony/Terrace',
            'Wheelchair accesible',
            'Basement',
            'Private parking',
            'Garden'
        ];
    
        foreach ($amenities as $item) {
            $amenity = new Amenity();
            $amenity->amenity = $item;
            $amenity->save();
        }
    }
}
