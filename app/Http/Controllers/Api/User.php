<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite_listing;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class User extends Controller
{
  public function like(Request $request, $user_id)
  {
    $like = new Favorite_listing();

    $like->user_id = $user_id;
    $like->property_id = $request->input('propertyId');
    $like->save();

    return
      [
        'message' => 'Like was saved!'
      ];
  }

  public function userListings()
  {
    $user = Auth::user();
    $listings = Property::where('user_id', $user->id)
      ->with('address')
      // ->with('favorite_listing')
      // ->leftJoin('favorite_listings', 'properties.id', 'favorite_listings.property_id')
      ->orderBy('created_at', 'desc')
      ->get();
    // dd($listings);

    return $listings;
  }
}
