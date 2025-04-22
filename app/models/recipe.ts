import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import RecipeIngredient from '#models/recipe_ingredient'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import TypeRecipe from '#models/type_recipe'

export default class Recipe extends BaseModel {
  @hasOne(() => RecipeIngredient, {
    foreignKey: 'recipe_id',
    localKey: 'id',
  })
  declare recipeIngredients: HasOne<typeof RecipeIngredient>

  @hasOne(() => TypeRecipe, {
    foreignKey: 'type_recipe_id',
    localKey: 'id',
  })
  declare typeRecipe: HasOne<typeof TypeRecipe>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare type_recipe_id: number

  @column()
  declare image: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
