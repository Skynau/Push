<?php

namespace Database\Seeders;

use App\Models\Heating;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HeatingSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $heatings = [
      'gas',
      'eletric',
      'central'
    ];

    foreach ($heatings as $item) {
      $heating = new Heating();
      $heating->type = $item;
      $heating->save();
    }
  }
}
