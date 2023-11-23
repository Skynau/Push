<?php

use App\Http\Controllers\Api\Listing;
use App\Http\Controllers\Api\Search;
use App\Http\Controllers\Api\SendNews;
use App\Http\Controllers\Api\User;
use App\Http\Controllers\MessageController;
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

// Route::put('/user/profile-information', [UpdateUserProfileInformation::class, 'update']);

Route::get('/user-listings', [User::class, 'userListings']);

//----------chat----------

Route::get('/messages/{chat_id}', [MessageController::class, 'chatMessages']);

Route::get('/chats', [MessageController::class, 'index']);

Route::post('/messages/{chat_id?}', [MessageController::class, 'message']);

Route::post('/message-first/{user_id}', [MessageController::class, 'firstMessage']);

//-----------------------

Route::post('/property/{property_id}/delete', [Listing::class, 'destroy']);

Route::post('/property/{property_id}/update', [Listing::class, 'update']);

Route::get('/property/{property_id}/likes', [User::class, 'showLikes']);

Route::post('/email-to-newsletter', [SendNews::class, 'save']);

Route::get('/latest', [Search::class, 'latest']);
