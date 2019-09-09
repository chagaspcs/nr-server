'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Building extends Model {
    corporates () {
        return this.belongsTo('App/Models/Corporate')
    }

    documents() {
        return this.hasMany('App/Models/Document')
    }
}

module.exports = Building
