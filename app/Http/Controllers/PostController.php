<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Get all the posts
     */
    public function index()
    {
        return response()->json([
            ['title' => 'flat', 'description' => 'A flat button'],
            ['title' => 'great', 'description' => 'A great button'],
            ['title' => 'awesome', 'description' => 'An awesome button'],
            ['title' => 'magnificent', 'description' => 'A magnificent button']
        ]);
    }
}
