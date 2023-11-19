<?php

use App\Http\Controllers\Api\Listing;
use App\Http\Controllers\Api\Search;
use App\Http\Controllers\Api\User;
use App\Http\Controllers\SearchBar;
use App\Http\Controllers\UpdateUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});



Route::get('/search', [Search::class, 'index']);

Route::get('/property/{id}', [Search::class, 'detail']);

Route::post('/property/{user_id}/store', [User::class, 'like']);

Route::post('/property/store', [Listing::class, 'store']);

Route::put('/user/profile-information', [UpdateUserProfileInformation::class, 'update']);

Route::get('/user-listings', [User::class, 'userListings']);

Route::post('/{property_id}/delete', [Listing::class, 'destroy']); //this need to fix

Route::post('/property/{property_id}/update', [Listing::class, 'update']);

