import type { HttpContext } from '@adonisjs/core/http'

export default class IngredientsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/ingredients')
  }

  public async displayEdit({ view }: HttpContext) {
    return view.render('pages/fiches/fiche_ingredient')
  }

  public async create({ view }: HttpContext) {
    // Todo
  }
}
