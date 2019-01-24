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
            ['title' => 'Flat button', 'description' => 'A flat button'],
            ['title' => 'Great button', 'description' => 'A great button'],
            ['title' => 'Awesome button', 'description' => 'An awesome button'],
            ['title' => 'Magnificent button', 'description' => 'A magnificent button']
        ]);
    }
}
