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

Route::get('/', 'HomeController@index');

Route::post('/ajax/login', 'UserController@login');
Route::post('/ajax/logout', 'UserController@logout');
Route::get('/ajax/user/get', 'UserController@getUser');
