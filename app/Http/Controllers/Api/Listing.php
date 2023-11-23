<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Amenity;
use App\Models\Media;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Listing extends Controller
{
  public function store(Request $request)
  {
    // dd($request->all(), $request->file("media"));
    $get_amenities = [];
    // $get_amenities[] = $request->input('amenities');
    if ($request->has('amenities'))
      foreach ($request->input('amenities') as $amenity) {
        $get_amenities[] = $amenity;
      }
    // dd($get_amenities);
    $amenities = Amenity::whereIn('id', $get_amenities)->get();

    // dd($amenities);


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


    if ($request->file('photoAttachmentPano')) {

      // $file = $request->file('photoAttachmentPano'){
      foreach ($request->file('photoAttachmentPano') as $imageFilePano) {
        $imageName = time() . '_' . $imageFilePano->getClientOriginalName() . '.' . $imageFilePano->extension();
        $imagePath = '/uploads/pano/' . $imageName;

        // Move the image to the specified path
        $imageFilePano->move(public_path('/uploads/pano'), $imageName);

        $property->photo_attachment = $imagePath; //sed to db
      }
      // $extension = $file->getClientOriginalExtension(); // get extension of image
      // $filename = time() . '.' . $extension;
      // $file->move('uploads/pano/', $file); // upload locally
    }
    // dd($property);
    $property->save();

    foreach ($amenities as $item) {
      $property->amenities()->attach($item->id);
    }

    // $property->amenities()->sync($request->input('amenities'));


    // Handle multiple images
    if ($request->file('media')) {
      //TODO take into account that multiple files go to object fileList, not in file(media) GOOGLE IT
      foreach ($request->file('media') as $imageFile) {
        $imageName = time() . '_' . $imageFile->getClientOriginalName() . '.' . $imageFile->extension();
        $imagePath = 'uploads/images/' . $imageName;

        // Move the image to the specified path
        $imageFile->move(public_path('uploads/images'), $imageName);

        // Create a new image record in the database
        $image = new Media();
        $image->property_id = $property->id;
        $image->type = 'property'; // Set the type accordingly
        $image->url = $imagePath;
        $image->save();
        // dd($image);
      }
    }


    return
      [
        'message' => 'Listing was created!'
      ];
  }

  public function destroy(string $property_id)
  {
    // dd($property_id);
    $property = Property::findOrFail($property_id);
    // dd($property);
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
    // Handle the image
    if ($request->hasFile('photo_attachment')) {
      $image = $request->file('photo_attachment');
      $imageName = time() . '.' . $image->getClientOriginalExtension();
      $image->move(public_path('uploads/images'), $imageName);

      // Update the image path in the database
      $property->photo_attachment = 'uploads/images/' . $imageName;
    }

    $property->save();

    return [
      'message' => 'Property updated successfully!'
    ];
  }
}
