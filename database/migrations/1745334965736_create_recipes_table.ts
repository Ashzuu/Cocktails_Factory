import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recipes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nom').notNullable()
      table
        .integer('type_recipes_id')
        .unsigned()
        .references('id')
        .inTable('type_recipes')
        .onDelete('SET NULL')
      table.string('image').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
