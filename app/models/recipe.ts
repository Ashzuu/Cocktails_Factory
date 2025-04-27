import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import RecipeIngredient from '#models/recipe_ingredient'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import TypeRecipe from '#models/type_recipe'

export default class Recipe extends BaseModel {
  @hasMany(() => RecipeIngredient, {
    foreignKey: 'recipe_id',
    localKey: 'id',
  })
  declare recipeIngredients: HasMany<typeof RecipeIngredient>

  @belongsTo(() => TypeRecipe, {
    foreignKey: 'type_recipes_id',
  })
  declare typeRecipe: BelongsTo<typeof TypeRecipe>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare type_recipes_id: number

  @column()
  declare description: string

  @column()
  declare image: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
