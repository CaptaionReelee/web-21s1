const express = require('express')
const { json, urlencoded } = require('body-parser')
const { readBooks, readBook, replaceBook, createBook, updateBook, deleteBook } = require('./features/bookController')
const { readCovidRecords, readCovidRecord, createCovidRecord, deleteRecord, updateCovidRecord } = require('./features/covidController')

const app = express()

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/books', readBooks)
app.get('/books/:isbn13', readBook)
app.post('/books', createBook)
app.put('/books/:isbn13', replaceBook)
app.patch('/books/:isbn13', updateBook)
app.delete('/books/:isbn13', deleteBook)
// Lab
app.get('/covid', readCovidRecords)
app.get('/covid/:stateId', readCovidRecord)
app.post('/covid', createCovidRecord)
app.patch('/covid/:stateId', updateCovidRecord)
app.delete('/covid/:stateId', deleteRecord)

module.exports = { app }
