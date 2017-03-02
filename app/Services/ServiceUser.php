<?php
namespace App\Services;


use App\User;
use Illuminate\Support\Facades\Hash;

class ServiceUser {
    
    public function signup() {
        $password = Hash::make('test');
        User::create(['name' => 'test', 'email' => 'test2', 'password' => $password]);
    }
    
}