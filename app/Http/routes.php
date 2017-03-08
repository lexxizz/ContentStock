<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', function () {
//    return view('home');
//});
//
//Route::auth();
Route::group(['prefix' => 'ajax'], function () {
    Route::post('/login', 'UserController@login');
    Route::post('/logout', 'UserController@logout');
    Route::get('/user/get', 'UserController@getUser');
});


Route::any('{all}', 'HomeController@index')
    ->where('all', '.*');
