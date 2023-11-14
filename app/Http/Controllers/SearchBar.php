<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class SearchBar extends Controller
{
    // public function index()
    // {
    //     return view('');
    // }

    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $results = Address::where('address', 'like', '%' . $searchTerm . '%')->get();

        return response()->json($results);
    }
}

