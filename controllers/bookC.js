const { Book } = require('../models/index')

class Controller {

    static showData(req, res) {
        Book.findAll()
        .then(data => {
            res.render('books/books', {
            listBooks : data
            })
        })
        .catch(err => {
            res.send(err)
        })
    }


    static getFormAdd(req, res) {
        res.render('books/add')
    }


    static addData(req, res) {
        let error = 0
        let objBook = {
            name: req.body.name,
            isbn: req.body.isbn,
            released_year: req.body.released_year,
            author: req.body.author,
            genre: req.body.genre
        }
        for (let key in objBook) {
            if (objBook[key] === '') {
                error ++
            }
        }
        if (error > 0) {
            res.send(`Empty Value is Invalid!`)
        } else {
            Book.create(objBook)
            .then (data => {
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
        }
    }



    static getFormEdit(req, res) {
        const idInput = req.params.id
        Book.findOne({
            where: {
                id: idInput
            }
        })
        .then (data => {
            res.render('books/edit', {
                listBooks: data
            })
        })
    }



    static editData(req, res) {
        const idInput = req.params.id
        let objBook = {
            name: req.body.name,
            isbn: req.body.isbn,
            released_year: req.body.released_year,
            author: req.body.author,
            genre: req.body.genre
        }
        for (let key in objBook) {
            if (objBook[key] === '') {
                error ++
            }
        }
        if (error > 0) {
            res.send(`Empty Value is Invalid!`)
        } else {
            Book.update(
                objBook,
                {
                    where: {
                        id: idInput
                    }
                })
            .then (data => {
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
        }
    }


    
    static deleteData(req, res) {
        const idInput = req.params.id

        Books.destroy({
          where: {
            id: idInput
          }
        })
          .then(data => {
            res.redirect('/books')
          })
    }

}


module.exports = Controller