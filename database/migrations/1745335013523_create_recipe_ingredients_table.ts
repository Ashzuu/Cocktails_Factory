import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recipe_ingredients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('recipe_id').unsigned().references('id').inTable('recipes').onDelete('CASCADE')
      table
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('SET NULL')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
