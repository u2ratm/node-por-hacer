const fs = require('fs')

let listadoPoHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPoHacer)

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {
    try {
        listadoPoHacer = require('../db/data.json')
    } catch (error) {
        listadoPoHacer = []
    }


}

const crear = (descripcion) => {

    cargarDB()


    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPoHacer.push(porHacer)

    guardarDB()

    return porHacer;
}

const getListado = () => {
    cargarDB()
    return listadoPoHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()

    let index = listadoPoHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPoHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB()

    let nuevoListado = listadoPoHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoPoHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPoHacer = nuevoListado
        guardarDB()
        return true
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}