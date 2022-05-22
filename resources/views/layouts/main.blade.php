<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="{{ @asset('assets/fonts/all.min.css') }}" />
    <link rel="stylesheet" href="{{ @asset('assets/js/lib/bootstrap/bootstrap.css') }}" />
    <link rel="stylesheet" href="{{ @asset('assets/css/style.css') }}" />
    <link rel="stylesheet" href="{{ @asset('assets/css/media.css') }}" />
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="./php/form.php">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Water+Brush&display=swap" rel="stylesheet">
    <link rel="icon" href="{{ @asset('assets/images/Logo.webp') }}" />
    <title>Dream Tour Travel</title>
  </head>
  <body>


    @include('header')

    @yield('content')

    @include('footer')

    @include('scripts')
  </body>
</html>
