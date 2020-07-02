const { Book } = require('../models/index')

class Controller {

    static showData(req, res) {
        Book.findAll()
            .then(data => {
                
            })

    }

    static getFormAdd(req, res) {
        res.render('books/add', {
            title: "Tambah Data"
        })

    }

    static addData(req, res) {

    }

    static getFormEdit(req, res) {

    }

    static editData(req, res) {

    }

    static deleteData(req, res) {

    }

}


module.exports = Controller