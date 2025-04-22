import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db
      .table('type_ingredients')
      .insert(['liquide', 'solide'].map((type: string) => ({ type })))
    await db
      .table('type_recipes')
      .insert(['mocktail', 'cocktail'].map((type: string) => ({ type })))
  }
}
