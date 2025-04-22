import type { HttpContext } from '@adonisjs/core/http'

export default class RecipesController {
  public async index({ view }: HttpContext) {
    return view.render('pages/recipes')
  }
  public async displayEdit({ view }: HttpContext) {
    return view.render('pages/fiches/fiche_recipe')
  }
  public async create({ view }: HttpContext) {
    // Todo
  }
}
