<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Newsletter;
use Illuminate\Http\Request;

class SendNews extends Controller
{
  public function save(Request $request)
  {
    $mail = new Newsletter();
    $mail->email = $request->input('email');
    $mail->save();

    return
      [
        'message' => 'BOOOOM 💣 We got your email! 👋 '
      ];
  }
}
