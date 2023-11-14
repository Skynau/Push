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
    // $priceFrom = $request->input('price_from') ?? 0;
    // $priceTo = $request->input('price_to') ?? 100000000;
    // $sizeFrom = $request->input('size_from') ?? 0;
    // $sizeTo = $request->input('size_to') ?? 100000000;
    // $furnishing = $request->input('furnishing') ?? "%";
    // $amenity = $request->input('amenity') ?? null; //here need to fix for now is null bcs we have just 3 property with 0 amenity
    // $pets = $request->input('petsWelcome') ?? 1; //default setting is true
    // $date = $request->input('listingDate') ?? null;


    // // $apartmet = $request->input('apartment');


    //   // $results = Property::query()
    //   // ->where('active', 1) //this is for active property
    //   ->where('type_id', $type)
    //   // ->orWhere('type_id', $type)
    //   ->where('disposition_id', 'like', $disposition)
    //   ->where('price_rent', '>', $priceFrom)
    //   ->where('price_rent', '<', $priceTo)
    //   ->where('square_meters', '>', $sizeFrom)
    //   ->where('square_meters', '<', $sizeTo)
    //   ->where('furnishing_id', 'like', $furnishing)
    //   ->where('amenities_id', $amenity) //same here
    //   ->where('pets_welcome', $pets);
    // // ->orWhere('listing_date', '=', $date) //HERE NEED TO FIX NULL listing_date COLUMN IN DB BCS IT IS HERE =




    $query =  Property::query();
    if ($request->input('apartment')) {
      $query
        ->where('type_id', 2);
    }
    if ($request->input('house')) {
      $query
        ->where('type_id', 1);
    }
    if ($request->input('1kk')) {
      $query
        ->where('disposition_id', 1);
    }
    if ($request->input('1kk')) {
      $query
        ->where('disposition_id', 1);
    }



    $results = $query
      ->where('active', 1)
      ->orderBy('created_at', 'desc')
      ->get();

    return response()->json($results);
  }
}

//apartment=true&2kk=true&3kk=true&3+1=true&searchFieldValue=vodicko&partialyFurnished=true&basement=true
//apartment=true&house=true&2kk=true&3kk=true&3+1=true&searchFieldValue=vodicko&partialyFurnished=true&basement=true

///api/search?apartment=true&house=true&1kk=true&1+1=true&2kk=true&2+1=true&3kk=true&3+1=true&4kk=true&bigger=true&amountFrom=10000&amountTo=40000&sizeFrom=15&sizeTo=100&furnished=true&partialyFurnished=true&unfurnished=true&petsWelcome=true


//$request->input('type')
//http://www.push.test/api/search?type=1

//$request->input('disposition') 
//http://www.push.test/api/search?type=1&disposition=1

//$request->input('price_from')
//http://www.push.test/api/search?type=1&disposition=1&price_from=11000

//$request->input('price_to')
//http://www.push.test/api/search?type=1&disposition=1&price_from=9000&price_to12000


//$request->input('searchFieldValue')
//Artem working on address 

//$request->input('size_from')
//http://www.push.test/api/search?size_from=20

//$request->input('size_to')
//http://www.push.test/api/search?size_to=200

//$request->input('furishing')
//http://www.push.test/api/search?furnishing=1

//$request->input('amenities')
//http://www.push.test/api/search?amenity=1

//$request->input('petsWelcome')
//http://www.push.test/api/search?petsWelcome=1

//$request->input('listingDate')
//http://www.push.test/api/search?listingDate= HERE I DONT KNOW THE FORMAT FROM DATE PICKER


//for front end data consumer:
// TYPE:
// house
// type=1

// flat
// type=2

// //////////
// Disposition:
// 1+kk
// disposition=1

// 1+1
// disposition=2

// 2+kk:
// disposition=3

// 2+1:
// disposition=4

// 3+kk:
// disposition=5

// 3+1:
// disposition=6

// 4+kk:
// disposition=7

// bigger:
// disposition=bigger			!!!!! THIS I NEED TO IMPLEMENT


// /////////////


// Price:

// price_from=

// price_to=


// /////////////

// Size:

// size_from=

// size_to=

// //////////////

// Furnishing:

// no:
// furnishing=1

// partially:
// furnishing=2

// fully:
// furnishing=3


// ////////////////


// Amenities:

// balcony/terrace:
// amenity=1

// Wheelchair accesible:
// amenity=2

// Basement:
// amenity=3

// Private parking:
// amenity=4

// Garden:
// amenity=5



// //////////////////


// Pets welcome:

// True:
// petsWelcome=1

// False:
// petsWelcome=0



// /////////////////

// Listing Date:

// listingDate=      Here dont know the format from datapicker