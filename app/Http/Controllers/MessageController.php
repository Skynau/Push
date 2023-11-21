<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\Message as MessageEvent;

class MessageController extends Controller
{

    public function index()
    {
        $user = Auth::user();

    
        $messages = Message::whereIn('chat_id', $user->chats->pluck('id'))->get();

    
        $messageData = $messages->map(function ($message) {

        return [
            'text' => $message->text,
            'created_at' => $message->created_at->toDateTimeString(),
            ];
        });

        return response()->json(['messages' => $messageData]);
    
    }

    public function message(Request $request)
    {

        $request->validate([
            'email' => 'required|string',
            'message' => 'required|string',
        ]);

        $user = User::where('email', $request->input('email'))->first();

        // $user->chats->load('messages');

        // dd($user);
        if ($user) {

            $fromUser = Auth::user();

            $chat = $fromUser->chats()
                ->whereHas('users', function ($query) use ($user) {
                    $query->where('users.id', $user->id);
                })
                ->first();

            if (!$chat) {
                $chat = new Chat;
                $chat->save();
                $chat->users()->attach([$user->id, $fromUser->id]);
            }

            $message = new Message([
                'user_id' => $fromUser->id,
                'chat_id' => $chat->id,
                'text' => $request->input('message'),
            ]);

            $chat->messages()->save($message);

            event(new MessageEvent('Hello', "World"));

            return response()->json(['message' => 'Event fired successfully']);
        }  
    }
}
