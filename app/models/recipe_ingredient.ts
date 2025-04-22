import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Recipe from '#models/recipe'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Ingredient from '#models/ingredient'

export default class RecipeIngredient extends BaseModel {
  @belongsTo(() => Recipe)
  declare recipe: BelongsTo<typeof Recipe>

  @belongsTo(() => Ingredient)
  declare ingredients: BelongsTo<typeof Ingredient>

  @column()
  declare recipeId: number

  @column()
  declare ingredientId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
