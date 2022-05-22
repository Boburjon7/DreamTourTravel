<?php

namespace App\Services;
//       require_once "vendor/autoload.php";
        use GuzzleHttp\Client;

class TelegramService
{
    public function sendMessage($name, $phone)
    {
        // send message to channel/person






        try {
            $client = new Client([
                // Base URI is used with relative requests
                "base_uri" => "https://api.telegram.org",
            ]);

                             if (isset($name)) {
                                 if (!empty($name)) {
                                     $name = strip_tags($name);
                                     $nameTitle = "First Name: ";
                                 }
                             };

                             if (isset($phone)) {
                                 if (!empty($phone)) {
                                     $phone = strip_tags($phone);
                                     $phoneTitle = "Phone Name: ";
                                 }
                             };


                             $arr = array(
                                 $nameTitle => $name,
                                 $phoneTitle => $phone
                             );

                             $text= "";
                                 foreach ($arr as $key => $value) {
                                     $text .= "<b>".$key."</b>".$value."\n";
                                 }



            $bot_token = "5264693454:AAE0n5VO9xXZoaYm70aufMfJpen5IK9VaFQ";
            $chat_id = "872487068";
            $message = "$text";

            $response = $client->request("GET", "/bot$bot_token/sendMessage", [
                "query" => [
                    "chat_id" => $chat_id,
                    "text" => $message,
                    "parse_mode" => "HTML",
                ]
            ]);

            $body = $response->getBody();
            $arr_body = json_decode($body);

            if ($arr_body->ok) {
               return true;
            }
        } catch(Exception $e) {
            // $e->getMessage();
        }

        return false;


    }
}
