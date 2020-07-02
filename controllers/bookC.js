const { Book } = require('../models/index')
const { isLoggedIn } = require('../helpers/controllerHelpers.js')

class Controller {

    static showData(req, res) {

        Book.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
        .then(data => {

            if (req.session.isLoggedIn) {
                res.render('books/books', {
                    listBooks : data
                    })
            }
            else {
                res.redirect('/admins')
            }
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }


    static getFormAdd(req, res) {
        
        if (req.session.isLoggedIn) {
            res.render('books/add', {title:"Tambah Buku"})
        }
        else {
            res.redirect('/admins')
        }
    }


    static addData(req, res) {
        let error = 0
        let objBook = {
            name: req.body.name,
            isbn: req.body.isbn,
            released_year: req.body.released_year,
            author: req.body.author,
            genre: req.body.genre,
            stock: req.body.stock
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
            if (req.session.isLoggedIn) {
                res.render('books/edit', {
                    listBooks: data
                })
            }
            else {
                res.redirect('/admins')
            }
            
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
                if (req.session.isLoggedIn) {
                    res.redirect('/books')
                }
                else {
                    res.redirect('/admins')
                }
                
            })
            .catch(err => {
                res.send(err)
            })
        }
    }


    
    static deleteData(req, res) {
        const idInput = req.params.id

        Book.destroy({
          where: {
            id: idInput
          }
        })
          .then(data => {
              if (req.session.isLoggedIn) {
                res.redirect('/books')
            }
            else {
                res.redirect('/admins')
            }
          })
    }

}


module.exports = Controller