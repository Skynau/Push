<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Listing extends Controller
{
  public function store(Request $request)
  {
    $user = Auth::user();
    // dd($user->id);
    $property = new Property();
    $property->user_id = $user->id;
    $property->title = $request->input('title');
    //address
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
    if ($request->hasFile('photoAttachment')) {

      $file = $request->file('photoAttachment');
      $extension = $file->getClientOriginalExtension(); // get extension of image
      $filename = time() . '.' . $extension;
      $file->move('uploads/images/', $filename); // upload locally
      $property->photo_attachment = 'uploads/images/' . $filename; //sed to db
    }
    $property->save();

    // dd($request->all());


    return
      [
        'message' => 'Listing was created!'
      ];
  }
}
