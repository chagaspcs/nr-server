'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingSchema extends Schema {
  up () {
    this.create('buildings', (table) => {
      table.increments()
      table
        .integer('corporate_id')
        .unsigned()
        .references('id')
        .inTable('corporates')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('buildings')
  }
}

module.exports = BuildingSchema
