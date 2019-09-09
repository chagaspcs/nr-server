'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Document extends Model {
    type_of_documents () {
        return this.hasOne('App/Models/TypeOfDocument')
    }

    users () {
        return this.belongsTo('App/Models/User')
      }
    
    buildings () {
        return this.belongsTo('App/Models/Building')
    }
}

module.exports = Document
