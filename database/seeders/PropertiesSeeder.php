<?php

namespace Database\Seeders;

use App\Models\Property;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertiesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $properties = [
      [
        'title' => 'Apartment 1',
        'description' => 'Lorum adaksda',
        'price_rent' => 10000,
        'available_from' => '2023-11-11',
        'number_of_bathrooms' => 1,
        'square_meters' => 40,
        'active' => true,
        'pets_welcome' => true,
        'paid_status' => true,
        'type_id' => 1,
        'disposition_id' => 1,
        'condition_id' => 1,
        'furnishing_id' => 1,
      ],

      [
        'title' => 'Apartment 2',
        'description' => 'Lorum adaksda',
        'price_rent' => 14944,
        'available_from' => '2023-12-13',
        'number_of_bathrooms' => 2,
        'square_meters' => 50,
        'active' => false,
        'pets_welcome' => false,
        'paid_status' => false,
        'type_id' => 2,
        'disposition_id' => 2,
        'condition_id' => 2,
        'furnishing_id' => 2,
      ],

      [
        'title' => 'Apartment 1',
        'description' => 'Lorum adaksda',
        'price_rent' => 10000,
        'available_from' => '2023-11-11',
        'number_of_bathrooms' => 1,
        'square_meters' => 40,
        'active' => true,
        'pets_welcome' => true,
        'paid_status' => true,
        'type_id' => 1,
        'disposition_id' => 1,
        'condition_id' => 1,
        'furnishing_id' => 1,
      ],

      [
        'title' => 'Apartment 4',
        'description' => 'Lorum adaksda',
        'price_rent' => 20000,
        'available_from' => '2023-11-11',
        'number_of_bathrooms' => 3,
        'square_meters' => 60,
        'active' => true,
        'pets_welcome' => false,
        'paid_status' => true,
        'type_id' => 2,
        'disposition_id' => 4,
        'condition_id' => 2,
        'furnishing_id' => 3,
      ],

      [
        'title' => 'Apartment 5',
        'description' => 'Lorum adaksda',
        'price_rent' => 5000,
        'available_from' => '2023-11-11',
        'number_of_bathrooms' => 1,
        'square_meters' => 15,
        'active' => true,
        'pets_welcome' => false,
        'paid_status' => true,
        'type_id' => 1,
        'disposition_id' => 3,
        'condition_id' => 2,
        'furnishing_id' => 3,
      ],

      [
        'title' => 'Apartment 6',
        'description' => 'Lorum adaksda',
        'price_rent' => 2000,
        'available_from' => '2023-11-11',
        'number_of_bathrooms' => 1,
        'square_meters' => 80,
        'active' => true,
        'pets_welcome' => true,
        'paid_status' => true,
        'type_id' => 2,
        'disposition_id' => 1,
        'condition_id' => 1,
        'furnishing_id' => 1,
      ],
    ];

    foreach ($properties as $item) {
      $property  = new Property();
      $property->title = $item['title'];
      $property->description = $item['description'];
      $property->price_rent = $item['price_rent'];
      $property->available_from = $item['available_from'];
      $property->number_of_bathrooms = $item['number_of_bathrooms'];
      $property->square_meters = $item['square_meters'];
      $property->active = $item['active'];
      $property->pets_welcome = $item['pets_welcome'];
      $property->paid_status = $item['paid_status'];
      $property->type_id = $item['type_id'];
      $property->disposition_id = $item['disposition_id'];
      $property->condition_id = $item['condition_id'];
      $property->furnishing_id = $item['furnishing_id'];
      $property->save();
    }
  }
}
