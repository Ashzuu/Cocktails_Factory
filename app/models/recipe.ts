import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import RecipeIngredient from '#models/recipe_ingredient'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Recipe extends BaseModel {
  @hasOne(() => RecipeIngredient)
  declare recipeIngredients: HasOne<typeof RecipeIngredient>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare type_recipes_id: number

  @column()
  declare image: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
