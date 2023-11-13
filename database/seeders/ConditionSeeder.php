<?php

namespace Database\Seeders;

use App\Models\Condition;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConditionSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $conditons = [
      'newly built',
      'very good',
      'good',
      'bad'
    ];

    foreach ($conditons as $item) {
      $condition = new Condition();
      $condition->condition = $item;
      $condition->save();
    }
  }
}
