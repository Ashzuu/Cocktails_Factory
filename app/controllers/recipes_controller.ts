import type { HttpContext } from '@adonisjs/core/http'
import Recipe from '#models/recipe'
import { RecipeRepository } from '../repository/recipe_repository.js'

export default class RecipesController {
  public async index({ view }: HttpContext) {
    const recipes: Recipe[] = await RecipeRepository.getAllRecipes()
    return view.render('pages/recipes', { recipes })
  }
  public async displayEdit({ view }: HttpContext) {
    return view.render('pages/fiches/fiche_recipe')
  }
  public async create({ view }: HttpContext) {
    // Todo
  }
}
