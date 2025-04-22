import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import RecipeIngredient from '#models/recipe_ingredient'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import TypeIngredient from '#models/type_ingredient'

export default class Ingredient extends BaseModel {
  @hasMany(() => RecipeIngredient)
  declare recipeIngredients: HasMany<typeof RecipeIngredient>

  @hasOne(() => TypeIngredient)
  declare typeIngredients: HasOne<typeof TypeIngredient>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare type_ingredient_id: number

  @column()
  declare price: number | null

  @column()
  declare quantite: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
