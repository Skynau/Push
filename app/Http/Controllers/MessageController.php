<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    // public function index()
    // {
    //     $messages = Message::all();
    //     return response()->json($messages);
    // }

    public function message(Request $request)
    {

        $request->validate([
            'email' => 'required|string',
            'message' => 'required|string',
        ]);

        $user = User::where('email', $request->input('email'))->first();

        if ($user) {
            
            event(Message::create([
                'from_user_id' => auth()->id(),
                'to_user_id' => $user->id, 
                'text' => $request->input('message')
            ]));

            return response()->json(['message' => 'Event fired successfully']);
        }
        // event(new Message($request->input('username'), $request->input('message')));
        
        
        // $message = Message::create([
        //         'from_user_id' => auth()->id(),
        //         'to_user_id' => $request->input('to_user_id'),
        //         'text' => $request->input('text'),
        //     ]);    
    }
}
