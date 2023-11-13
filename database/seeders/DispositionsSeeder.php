<?php

namespace Database\Seeders;

use App\Models\Disposition;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DispositionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dispositions = [
            '1+kk', 
            '1+1', 
            '2+kk',
            '2+1', 
            '3+kk', 
            '3+1', 
            '4+kk', 
            '4+1', 
            '5+kk', 
            '5+1', 
            '6+kk', 
            '6+1', 
            '7+kk', 
            '7+1', 
            'other'
        ];
    
        foreach ($dispositions as $item) {
            $disposition = new Disposition();
            $disposition->disposition = $item;
            $disposition->save();
        }
    }
}
