<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginCustomController;
use App\Http\Controllers\RegisterCustomController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::resource('login_customs', LoginCustomController::class);
Route::resource('register_customs', RegisterCustomController::class);
