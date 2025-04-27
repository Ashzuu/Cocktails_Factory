import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Recipe from '#models/recipe'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Ingredient from '#models/ingredient'

export default class RecipeIngredient extends BaseModel {
  @belongsTo(() => Recipe, {
    foreignKey: 'recipe_id',
  })
  declare recipe: BelongsTo<typeof Recipe>

  @belongsTo(() => Ingredient, {
    foreignKey: 'ingredient_id',
    localKey: 'id',
  })
  declare ingredients: BelongsTo<typeof Ingredient>

  @column()
  declare recipe_id: number

  @column()
  declare ingredient_id: number

  @column()
  declare quantity: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
