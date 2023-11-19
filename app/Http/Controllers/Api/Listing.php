<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Amenity;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Listing extends Controller
{
  public function store(Request $request)
  {
    // dd($request->input('amenities'));
    // $get_amenities = [];
    // $get_amenities[] = $request->input('amenities');
    // $amenities = Amenity::whereIn('amenity.id', $get_amenities)->get();
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
    $property->number_of_bathrooms = $request->input('numberOfBathroom');
    $property->active = 1;
    $property->paid_status = 0;
    if ($request->hasFile('photoAttachment')) {

      $file = $request->file('photoAttachment');
      $extension = $file->getClientOriginalExtension(); // get extension of image
      $filename = time() . '.' . $extension;
      $file->move('uploads/images/', $filename); // upload locally
      $property->photo_attachment = 'uploads/images/' . $filename; //sed to db
    }
    $property->save();

    // $property->amenities()->attach($amenities);


    return
      [
        'message' => 'Listing was created!'
      ];
  }

  public function destroy(string $property_id)
  {
    $property = Property::findOrFail($property_id);
    $property->delete();

    return
      [
        'message' => 'Listing was deleted!'
      ];
  }

  public function update(Request $request, $property_id)
  {
    $property = Property::findOrFail($property_id);
    $property->title = $request->input('title');
    $property->description = $request->input('description');
    $property->price_rent = $request->input('price_rent');
    $property->available_from = $request->input('available_from');
    $property->square_meters = $request->input('square_meters');
    $property->disposition_id = $request->input('disposition_id');
    $property->pets_welcome = $request->input('pets_welcome');
    $property->type_id = $request->input('type_id');
    $property->condition_id = $request->input('condition_id');
    $property->furnishing_id = $request->input('furnishing_id');
    $property->heating_id = $request->input('heating_id');
    $property->number_of_bathrooms = $request->input('number_of_bathrooms'); //add this to front AGAIN
    //need to implement the image here
    $property->save();

    return [
      'message' => 'Mission updated successfully!'
    ];
  }
}
