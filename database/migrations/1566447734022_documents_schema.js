'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocumentSchema extends Schema {
  up () {
    this.create('documents', (table) => {
      table.increments()
      table
        .integer('building_id')
        .unsigned()
        .references('id')
        .inTable('buildings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('type_of_documents')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('documents')
  }
}

module.exports = DocumentSchema
