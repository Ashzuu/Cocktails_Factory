import Recipe from '#models/recipe'

export class RecipeRepository {
  /**
   * Get all recipes order by name
   * @returns {Promise<Recipe[]>} - A promise that resolves to an array of Recipe objects
   */
  static async getAllRecipes(): Promise<Recipe[]> {
    const recipes: Recipe[] = await Recipe.query().preload('recipeIngredients').orderBy('nom')
    return recipes
  }

  /**
   * Get a recipe by its ID
   * @param {number} id - The ID of the recipe to retrieve
   * @returns {Promise<Recipe>} - A promise that resolves to a Recipe object
   */
  static async getRecipeById(id: number): Promise<Recipe> {
    const recipe: Recipe = await Recipe.query()
      .preload('recipeIngredients')
      .where('id', id)
      .firstOrFail()
    return recipe
  }
}
