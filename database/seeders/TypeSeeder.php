<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $types = [
      'house',
      'flat'
    ];

    foreach ($types as $item) {
      $type = new Type();
      $type->type = $item;
      $type->save();
    }
  }
}
