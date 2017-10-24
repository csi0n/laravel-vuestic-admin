<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>{{config('app.settings.title')}}</title>
    <link href="{{mix('css/all.css')}}" rel='stylesheet' type='text/css'>
    <script>
        window.Settings={!! json_encode(config('app.settings') )!!}
    </script>
</head>
<body>
<div id="app"></div>
<script src="{{mix('js/all.js')}}" type="text/javascript"></script>
</body>
</html>