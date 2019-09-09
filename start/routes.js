'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('corporates', 'CorporateController')
  .apiOnly()
  .middleware('auth')

  Route.resource('buildings', 'BuildingController')
  .apiOnly()
  .middleware('auth')
  
  Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')