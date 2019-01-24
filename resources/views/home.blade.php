@extends('master')

@section('content')
    @include('partials.sidebar')

    <a href="{{ route('new-post') }}" id="plus-button">+</a>

    <posts></posts>

    

     
@endsection
