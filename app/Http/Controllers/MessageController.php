<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function index()
    {
        return Message::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required|string',
        ]);

        $user = Auth::user(); 

        $message = new Message([
            'user_id' => $user->id,
            'text' => $request->text,
        ]);

        $message->save();

        return $message;
    }
}
