<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;

class Search extends Controller
{
  public function index(Request $request)
  {
    // dd($request);



    // $type = $request->input('type');
    // $disposition = $request->input('disposition') ?? "%";
    // $furnishing = $request->input('furnishing') ?? "%";
    // $amenity = $request->input('amenity') ?? null; //here need to fix for now is null bcs we have just 3 property with 0 amenity
    // $date = $request->input('listingDate') ?? null;


    // // $apartmet = $request->input('apartment');

    //   // $results = Property::query()
    //   // ->where('active', 1) //this is for active property
    //   ->where('type_id', $type)
    //   // ->orWhere('type_id', $type)
    //   ->where('disposition_id', 'like', $disposition)
    // ->where('price_rent', '>', $priceFrom)
    // ->where('price_rent', '<', $priceTo)
    // ->where('square_meters', '>', $sizeFrom)
    // ->where('square_meters', '<', $sizeTo)
    //   ->where('furnishing_id', 'like', $furnishing)
    //   ->where('amenities_id', $amenity) //same here
    // ->where('pets_welcome', $pets);
    // // ->orWhere('listing_date', '=', $date) //HERE NEED TO FIX NULL listing_date COLUMN IN DB BCS IT IS HERE =


    $priceFrom = $request->input('amountFrom') ?? 0;
    $priceTo = $request->input('amountTo') ?? 100000000;
    $sizeFrom = $request->input('sizeFrom') ?? 0;
    $sizeTo = $request->input('sizeTo') ?? 100000000;
    $order = $request->input('order') ?? 'created_at';
    $orderFlow = $request->input('orderFlow') ?? 'desc';

    // $address = $request->input('searchFieldValue');

    $query =  Property::query();

    //type
    $possible_types = [];

    if ($request->input('apartment')) {
      $possible_types[] = 2;
      // $query
      //   ->where('type_id', 2);
    }
    if ($request->input('house')) {
      $possible_types[] = 1;
      // $query
      //   ->where('type_id', 1);
    }

    if ($possible_types) {
      $query->whereIn('type_id', $possible_types);
    }

    //disposition
    $possible_disposition = [];

    if ($request->input('1kk')) {
      $possible_disposition[] = 1;
      // $query
      //   ->where('disposition_id', 1);
    }
    if ($request->input('1plus1')) {
      $possible_disposition[] = 2;
      // $query
      //   ->where('disposition_id', 2);
    }
    if ($request->input('2kk')) {
      $possible_disposition[] = 3;
      // $query
      //   ->where('disposition_id', 3);
    }
    if ($request->input('2plus1')) {
      $possible_disposition[] = 4;
      // $query
      //   ->where('disposition_id', 4);
    }
    if ($request->input('3kk')) {
      $possible_disposition[] = 5;
      // $query
      //   ->where('disposition_id', 5);
    }
    if ($request->input('3plus1')) {
      $possible_disposition[] = 6;
      // $query
      //   ->where('disposition_id', 6);
    }
    if ($request->input('4kk')) {
      $possible_disposition[] = 7;
      // $query
      //   ->where('disposition_id', 7);
    }
    if ($request->input('bigger')) {
      $possible_disposition = [8, 9, 10, 11, 12, 13, 14, 15]; ///this need to fix with other possible_disposition
      // $query
      //   ->where('disposition_id', '>', 7);
    }
    if ($possible_disposition) {
      $query->whereIn('disposition_id', $possible_disposition);
    }

    //furnishing
    $possible_furnishing = [];

    if ($request->input('furnished')) {
      $possible_furnishing[] = 3;
      // $query
      //   ->where('furnishing_id', 3);
    }
    if ($request->input('partialy')) {
      $possible_furnishing[] = 2;
      // $query
      //   ->where('furnishing_id', 2);
    }
    if ($request->input('unfurnished')) {
      $possible_furnishing[] = 1;
      // $query
      //   ->where('furnishing_id', 1);
    }
    if ($possible_furnishing) {
      $query->whereIn('furnishing_id', $possible_furnishing);
    }

    //pets

    if ($request->input('pets')) {
      $query->where('pets_welcome', 1);
    }

    //address
    $searchString = $request->input('searchFieldValue');
    if (isset($searchString)) {
      $query->leftJoin('addresses', 'properties.address_id', 'addresses.id')
        ->where('addresses.city', 'LIKE',  $searchString . '%')
        ->orWhere('addresses.street', 'LIKE', '%' . $searchString . '%')
        ->orWhere('addresses.district', 'LIKE', $searchString . '%');
    }

    //amenities
    $possible_amenities = [];
    if ($request->input('balcony')) {
      $possible_amenities[] = 1;
    }
    if ($request->input('wheelchair')) {
      $possible_amenities[] = 2;
    }
    if ($request->input('basement')) {
      $possible_amenities[] = 3;
    }
    if ($request->input('parking')) {
      $possible_amenities[] = 4;
    }
    if ($request->input('garden')) {
      $possible_amenities[] = 5;
    }
    if ($possible_amenities) {
      $query->leftJoin('property_amenity', 'properties.id', 'property_amenity.property_id')
        ->whereIn('property_amenity.property_id', $possible_amenities);
    }

    //datePicker
    $datePicker = $request->input('datePicker');
    if (isset($datePicker)) {
      $query->where('properties.created_at', '>', $datePicker);
    }

    $results = $query
      ->with('media')
      ->with('address')
      ->where('active', 1)
      ->where('price_rent', '>', $priceFrom)
      ->where('price_rent', '<', $priceTo)
      ->where('square_meters', '>', $sizeFrom)
      ->where('square_meters', '<', $sizeTo)

      ->orderBy('properties' . '.' . $order, $orderFlow)
      ->get();

    return [
      'items' => $results,
      'query' => $query->toSql()
    ];
  }
}
