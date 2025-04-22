import Ingredient from '#models/ingredient'

export class IngredientRepository {
  /**
   * Get all ingredients from the database, order by name
   */
  static async getAllIngredients(): Promise<Ingredient[]> {
    const ingredients: Ingredient[] = await Ingredient.query().orderBy('nom')
    return ingredients
  }

  /**
   * Get an ingredient by its ID
   * @param {number} id - The ID of the ingredient to retrieve
   * @returns {Promise<Ingredient>} - A promise that resolves to an Ingredient object
   */
  static async getIngredientById(id: number): Promise<Ingredient> {
    const ingredient: Ingredient = await Ingredient.query().where('id', id).firstOrFail()
    return ingredient
  }
}
