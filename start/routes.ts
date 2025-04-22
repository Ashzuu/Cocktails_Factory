/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@adonisjs/core/services/router'

const RecipesController = () => import('#controllers/recipes_controller')
const IngredientsController = () => import('#controllers/ingredients_controller')

Route.get('/recipes', [RecipesController, 'index']).as('recipesView')
Route.get('/recipes/edit/:id', [RecipesController, 'displayEdit']).as('recipesEdit')
Route.post('/recipes/create/:id', [RecipesController, 'create']).as('recipesCreate')

Route.get('/ingredients', [IngredientsController, 'index']).as('ingredientsView')
Route.get('/ingredients/edit/:id', [IngredientsController, 'displayEdit']).as('ingredientsEdit')
Route.post('/ingredients/create/:id', [IngredientsController, 'create']).as('ingredientsCreate')
