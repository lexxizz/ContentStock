<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Services\ServiceUser;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct() {
//        $this->middleware('auth');
//    }

    /**
     * @return mixed
     */
    public function getUser() {
        return response()->json([
           'user' => Auth::user() 
        ]);
    }

    /**
     * @return mixed
     */
    public function login(Request $request) {

        if (Auth::attempt($request->request->all())) {
            return response()->json([
                'status' => 'OK'
            ]);
        }
        return response()->json([
            'status' => 'ERROR'
        ]);
    }

    /**
     * @return mixed
     */
    public function logout() {
        Auth::logout();
        return response()->json([
            'status' => 'OK'
        ]);
    }
}