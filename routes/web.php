<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/test-user-status', function () {
  dd(Auth::user());
});
// Route::get('/', function () {
//   return view('homepage');
// });
Route::view('/{path?}', 'homepage')->where('path', '.*');
