<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->all();

        $phone = $data['tel'];
        $name = $data['name'];

        app('TelegramService')->sendMessage($name, $phone);

        return redirect(route('home'));

    }
}
