<?php

use App\Http\Controllers\Api\Listing;
use App\Http\Controllers\Api\Search;
use App\Http\Controllers\Api\User;
use App\Http\Controllers\SearchBar;
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

// Route::get('/api/your-search-route', [SearchBar::class, 'search'])->name('search');

Route::get('/search', [Search::class, 'index']);

Route::get('/property/{id}', [Search::class, 'detail']);

Route::post('/property/{user_id}/store', [User::class, 'like']);

Route::post('/property/store', [Listing::class, 'store']);
