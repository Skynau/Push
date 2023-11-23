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

    public function index($user_email)
    {
        $user = Auth::user();

        // $fromUser = User::where('email', $user_email)->get();

        // $fromUserId = $fromUser->id;

        // $chats = $user->chats->load('messages, users');

        $chats = Message::where('user_id', $user->id)->get();

        $chatsSend = Message::where('sender',  $user->id)->get();

        // $chats = Message::leftJoin('chat_user', 'user_id', 'users.id')->where('user_id', $user->id)->get();



        // $chatsFrom = Message::leftJoin('users', 'user_id', 'users.id')->where('users.email', $user_email)->get();

        // SELECT * 
        // FROM `messages`
        // LEFT JOIN users ON user_id = users.id
        // WHERE users.email = 'john@gmail.com'


            
            // dd($chats, $chatsSend);

        return [
            $chats,
            // $chatsFrom
            $chatsSend
        ];
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
                'sender'  => $user->id,
                'text' => $request->input('message'),
            ]);

            $chat->messages()->save($message);

            event(new MessageEvent('Hello', "World"));

            return response()->json(['message' => 'Event fired successfully']);
        }
    }

    public function firstMessage(Request $request, $user_id)
    {
        $fromUser = Auth::user();

        $chat = $fromUser->chats()
            ->whereHas('users', function ($query) use ($user_id) {
                $query->where('users.id', $user_id);
            })
            ->first();

        if (!$chat) {
            $chat = new Chat;
            $chat->save();
            $chat->users()->attach([$user_id, $fromUser->id]);
        }

        $message = new Message([
            'user_id' => $fromUser->id,
            'sender'  => $user_id,
            'chat_id' => $chat->id,
            'text' => $request->input('text'),
        ]);

        $chat->messages()->save($message);
    }
}
