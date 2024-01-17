const express = require('express')
const { AddContact, GetContacts, deleteContact, updateContact, getOneContact } = require('../Controllers/Contact')

const contactRouter = express.Router()

contactRouter.post('/addContact',AddContact)

contactRouter.get('/getContacts',GetContacts)


contactRouter.delete('/deleteContact/:id',deleteContact)


contactRouter.put('/updateContact/:id',updateContact)

contactRouter.get('/getOneContact/:id',getOneContact)



module.exports = contactRouter