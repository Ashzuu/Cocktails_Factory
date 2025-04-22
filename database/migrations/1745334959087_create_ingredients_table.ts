import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ingredients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nom').notNullable()
      table
        .integer('type_ingredients_id')
        .unsigned()
        .references('id')
        .inTable('type_ingredients')
        .onDelete('SET NULL')
      table.float('prix').nullable()
      table.integer('quantite').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
