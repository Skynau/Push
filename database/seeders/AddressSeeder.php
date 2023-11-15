<?php

namespace Database\Seeders;

use App\Models\Address;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $addresses = [
      [
        'street' => 'Tychonova',
        'street_number' => 5,
        'district' => 'Praha 6',
        'city' => 'Prague',
        'postal_code' => '160 00',
        'country' => 'Czech Republic',
        'place_id' => 'ChIJT1wb-CCVC0cR0UtgyiuFvIg',
        'latitude' => 50.0963584,
        'longitude' => 14.4030032,
      ],
      [
        'street' => 'Vodičkova',
        'street_number' => 1,
        'district' => 'Prague 2',
        'city' => 'Prague',
        'postal_code' => '120 00',
        'country' => 'Czech Republic',
        'place_id' => 'ChIJUyF9q_OUC0cRPYzHau0FePA',
        'latitude' => 50.0782136,
        'longitude' => 14.4213486,
      ],
      [
        'street' => 'Ohradní',
        'street_number' => 5,
        'district' => 'Prague 4',
        'city' => 'Prague',
        'postal_code' => '140 00',
        'country' => 'Czech Republic',
        'place_id' => 'ChIJrVuL-pGTC0cRfR2n4GHKo64',
        'latitude' => 50.0508013,
        'longitude' => 14.4559842,
      ],
      [
        'street' => 'Lazarská',
        'street_number' => 2,
        'district' => 'Prague 2',
        'city' => 'Prague',
        'postal_code' => '120 00',
        'country' => 'Czech Republic',
        'place_id' => 'EjFMYXphcnNrw6EgMiwgMTEwIDAwIFByYWhhIDEtTm92w6kgTcSbc3RvLCBDemVjaGlhIjASLgoUChIJx5ttOvKUC0cROEFaILHzh4MQAioUChIJxcJhRvKUC0cRTNndAFOWGX0',
        'latitude' => 50.0791729,
        'longitude' => 14.419604,
      ],
      [
        'street' => 'Rozkošného',
        'street_number' => 3,
        'district' => 'Prague 5',
        'city' => 'Prague',
        'postal_code' => '150 00',
        'country' => 'Czech Republic',
        'place_id' => 'ChIJv-agrFyUC0cRoMY_7byqniY',
        'latitude' => 50.0614468,
        'longitude' => 14.4098958,
      ],
    ];

    foreach ($addresses as $item) {
      $address = new Address();
      $address->street = $item['street'];
      $address->street_number = $item['street_number'];
      $address->district = $item['district'];
      $address->city = $item['city'];
      $address->postal_code = $item['postal_code'];
      $address->country = $item['country'];
      $address->place_id = $item['place_id'];
      $address->latitude = $item['latitude'];
      $address->longitude = $item['longitude'];
      $address->save();
    }
  }
}
