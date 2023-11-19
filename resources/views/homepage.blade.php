<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PUSH!</title>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  </style>
  <script  src="https://maps.googleapis.com/maps/api/js?key=&libraries=places" async defer></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js" async defer></script>
  <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
  <div id="homepage-app"></div>

  @viteReactRefresh
  @vite('resources/js/Homepage.jsx')


  
</body>
</html>
