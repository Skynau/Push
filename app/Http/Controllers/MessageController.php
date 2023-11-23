<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\Message as MessageEvent;
use App\Models\ChatUser;

class MessageController extends Controller
{

    public function index()
    {
        $user = Auth::user();

        $chats = ChatUser::where('user_id', $user->id)->with('user')->get();

        return [
            'chats' => $chats,
        ];
    }

    public function chatMessages($chat_id)
    {
        $user = Auth::user();

        //reciever -> user_id
        $chat = Chat::find($chat_id);
        $messages = $chat->messages;
        // $chats = Message::where('chat_id', $chat_id)->get();


        return [
            // $chats, 
            $messages
        ];
    }

    public function message(Request $request, $chat_id = null)
    {
        $request->validate([
            'email' => 'required|string',
            'message' => 'required|string',
        ]);
        $fromUser = Auth::user();

        if ($chat_id) {
            $chat = Chat::find($chat_id);
            $user = Chat::where('id', $chat_id)->whereHas('users', function ($query) use ($fromUser) {
                $query->where('users.id', '!=', $fromUser->id);
            })->first();
        } else {
            $user = User::where('email', $request->input('email'))->first();

            if ($user) {



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
            }
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
