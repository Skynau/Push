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
    dd($user->id);
    $property = new Property();
    dd($request->all());


    return
      [
        'message' => 'Listing was created!'
      ];
  }
}
