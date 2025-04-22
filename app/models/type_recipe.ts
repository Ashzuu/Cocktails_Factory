import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Recipe from '#models/recipe'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class TypeRecipe extends BaseModel {
  @belongsTo(() => Recipe, {
    foreignKey: 'type_recipe_id',
  })
  declare recipes: BelongsTo<typeof Recipe>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string
}
