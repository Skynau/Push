<?php

namespace Database\Seeders;

use App\Models\Furnishing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FurnishingSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $furnishings = [
      'no',
      'partially',
      'fully'
    ];

    foreach ($furnishings as $item) {
      $furnishing = new Furnishing();
      $furnishing->furnishing = $item;
      $furnishing->save();
    }
  }
}
