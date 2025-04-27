import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Recipe from '#models/recipe'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class TypeRecipe extends BaseModel {
  @hasMany(() => Recipe, {
    foreignKey: 'type_recipes_id',
    localKey: 'id',
  })
  declare recipes: HasMany<typeof Recipe>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string
}
