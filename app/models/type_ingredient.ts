import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Ingredient from '#models/ingredient'

export default class TypeIngredient extends BaseModel {
  @hasMany(() => Ingredient, {
    foreignKey: 'type_ingredient_id',
  })
  declare ingredients: HasMany<typeof Ingredient>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string
}
