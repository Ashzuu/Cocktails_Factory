import type { HttpContext } from '@adonisjs/core/http'
import { IngredientRepository } from '../repository/ingredient_repository.js'
import Ingredient from '#models/ingredient'

export default class IngredientsController {
  public async index({ view }: HttpContext) {
    const ingredients: Ingredient[] = await IngredientRepository.getAllIngredients()
    return view.render('pages/ingredients', { ingredients })
  }

  public async displayEdit({ view, params }: HttpContext) {
    const ingredient: Ingredient = await IngredientRepository.getIngredientById(params.id)
    return view.render('pages/fiches/fiche_ingredient', { ingredient })
  }

  public async edit({ view, request, response, params, session }: HttpContext) {
    // Todo
  }

  public async create({ view, request, response, session }: HttpContext) {
    // Todo
  }

  public async delete({ view }: HttpContext) {
    // Todo
  }
}
