<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Listing extends Controller
{
  public function store(Request $request)
  {
    // dd($request->all());
    $user = Auth::user();
    // dd($user->id);
    $address = new Address();
    $address->street = $request->input('street');
    $address->street_number = $request->input('streetNumber');
    $address->district = $request->input('district');
    $address->city = $request->input('city');
    $address->postal_code = $request->input('postalCode');
    $address->country = $request->input('country');
    $address->place_id = $request->input('placeId');
    $address->latitude = $request->input('latitude');
    $address->longitude = $request->input('longtitude');
    $address->save();
    // dd($address->id);
    $property = new Property();
    $property->user_id = $user->id;
    $property->address_id = $address->id;
    $property->title = $request->input('title');
    $property->description = $request->input('description');
    $property->price_rent = $request->input('price');
    $property->available_from = $request->input('availableFrom');
    $property->square_meters = $request->input('squareMeters');
    $property->disposition_id = $request->input('disposition');
    $property->pets_welcome = $request->input('petsWelcome');
    $property->type_id = $request->input('type');
    $property->condition_id = $request->input('condition');
    $property->furnishing_id = $request->input('furnishing');
    $property->heating_id = $request->input('heating');
    $property->active = 1;
    $property->paid_status = 0;
    $property->number_of_bathrooms = 1; //this is shit FIX IT
    $property->save();

    // dd($request->all());


    return
      [
        'message' => 'Listing was created!'
      ];
  }
}
