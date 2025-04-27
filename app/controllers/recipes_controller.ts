import type { HttpContext } from '@adonisjs/core/http'
import Recipe from '#models/recipe'
import { RecipeRepository } from '../repository/recipe_repository.js'

export default class RecipesController {
  public async index({ view }: HttpContext) {
    const recipes: Recipe[] = await RecipeRepository.getAllRecipes()
    return view.render('pages/recipes', { recipes })
  }
  public async displayEdit({ view, params }: HttpContext) {
    const recipe: Recipe = await RecipeRepository.getRecipeById(params.id)
    return view.render('pages/fiches/fiche_recipe', { recipe })
  }

  public async displayCreate({ view }: HttpContext) {
    return view.render('pages/forms/forms_recipe')
  }

  public async create({ view }: HttpContext) {}
}
