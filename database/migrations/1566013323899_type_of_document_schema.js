'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeOfDocumentSchema extends Schema {
  up () {
    this.create('type_of_documents', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('score')
      table.timestamps()
    })
  }

  down () {
    this.drop('type_of_documents')
  }
}

module.exports = TypeOfDocumentSchema
