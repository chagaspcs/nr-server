'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TypeOfDocument extends Model {
    documents () {
        return this.belongsTo('App/Models/Document')
    }
}

module.exports = TypeOfDocument
