'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CorporateSchema extends Schema {
  up () {
    this.create('corporates', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('nickname').notNullable()
      table.string('cnpj').notNullable()
      table.string('manager').notNullable()
      table.string('address').notNullable()
      table.string('contact1').notNullable()
      table.string('contact2')
      table.string('email').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('corporates')
  }
}

module.exports = CorporateSchema
