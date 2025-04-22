import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Ingredient from '#models/ingredient'

export default class TypeIngredient extends BaseModel {
  @belongsTo(() => Ingredient, {
    foreignKey: 'type_ingredient_id',
  })
  declare ingredients: BelongsTo<typeof Ingredient>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string
}
