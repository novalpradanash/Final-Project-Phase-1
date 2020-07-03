const { Book , Member , Transaction } =  require('../models/index')
class Controller {

    static showData(req, res) {
      //tampilin data, include Book sama Member
      
        Transaction.findAll({
          include: [Book, Member]
        })
        .then(data => {
          res.render('transactions/transaction', {
            listTransaction : data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

    static getFormAdd(req, res) {

      let allData = {}
      Member.findAll()
      .then(data => {
        allData.members = data
        return Book.findAll()
      })
      .then(data => {
        allData.books = data
        res.render('transactions/add', {
          dataMembers: allData.members,
          dataBooks: allData.books
        })
      })
      .catch(err => {
        console.log(err)
        res.send(err)

      })
      
      
    }

    static addData(req, res) {
      let error = 0
      let objTransaction = {
        BookId: req.body.BookId,
        MemberId: req.body.MemberId,
        borrowed_date: req.body.borrowed_date,
      }
      for (let key in objTransaction) {
        if (objTransaction[key] === '') {
          error ++
        }
      }
      if (error > 0) {
        res.send(`Empty value is invalid!`)
      } else {
        Transaction.create(objTransaction)
        .then(data => {
          res.redirect('/transactions')
        })
        .catch(err => {
          console.log(err)
        })
      }
  
    }

    static getFormEdit(req, res) {

    }

    static editData(req, res) {

    }

    static deleteData(req, res) {
        const idInput = req.params.id

        Transaction.destroy({
          where: {
            id: idInput
          }
        })
          .then(data => {
            if (req.session.isLoggedIn) {
                res.redirect('/transaction')
            }
            else {
                res.redirect('/transaction')
            }
          })

    }

}


module.exports = Controller