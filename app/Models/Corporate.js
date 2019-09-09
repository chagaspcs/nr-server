'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Corporate extends Model {
    user() {
        return this.hasMany('App/Models/User')
    }

    buildings() {
        return this.hasMany('App/Models/Building')
    }
}

module.exports = Corporate
