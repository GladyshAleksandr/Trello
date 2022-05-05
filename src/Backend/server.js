const express = require('express')
const connection = require('./database/dbConnection.js')
const PORT = 3001;



class DatabaseMethods {

    constructor() {
        let columnsTable = `create table if not exists trello_columns(
                id int primary key auto_increment,
                columnTitle varchar(255) not null
            )`

        let cardsTable = `create table if not exists trello_cards(
                id varchar(3) primary key,
                columnId int, 
                text varchar(255) not null,
                foreign key (columnId) references new_table (id) on delete cascade
            )`

        connection.connect(function (err) {
            if (err) {
                console.log("Error in the connection", err)
                throw err
            }

            console.log("Database connected")

            connection.query(columnsTable, function (err, result) {
                if (err) throw err
                console.log('Columns table created')
            })

            connection.query(cardsTable, function (err, result) {
                if (err) throw err
                console.log('Cards table created')
            })
        })
    }




    addCard() {
        connection.connect(function (err) {
            if (err) {
                return console.error('error with connection to DATABASE', err.message)
            }
            // let addCard = 
        })
    }

    addColumn() {

    }

    modeColumn() {

    }

    moveCard() {

    }

    deleteCard() {

    }

    deleteColumn() {

    }

    renameCard() {

    }

    renameColumn() {

    }
}

let data = new DatabaseMethods()

const app = express()

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.post('/add-card', (req, res, next) => {

})

app.post('/add-column', (req, res, next) => {

})

app.post('/move-column', (req, res, next) => {

})

app.post('/move-card', (req, res, next) => {

})

app.post('/delete-card', (req, res, next) => {

})

app.post('/delete-column', (req, res, next) => {

})

app.post('/rename-card', (req, res, next) => {

})

app.post('/rename-column', (req, res, next) => {

})