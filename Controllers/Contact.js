const Contact = require("../Models/Contact")

exports.AddContact = async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})
    
        if(found){
           return res.status(400).send({Msg:"Email already exist",found})
        }
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).send({Msg : "Contact Added",newContact})
    } catch (error) {
        res.status(500).send('Could not add Contact')
        
    }
}

exports.GetContacts = async(req,res)=>{
    try {
      const contactlist =  await Contact.find()
        res.status(200).send({Msg:"Contact List",contactlist})
    } catch (error) {
        res.status(500).send("Contact List not found")
    }
}

exports.deleteContact = async(req,res)=>{
    try {
       const {id} = req.params
       await Contact.findByIdAndDelete(id)
       res.status(200).send("Contact Deleted")
    } catch (error) {
        res.status(500).send("Could not delete Contact")
    }
}

exports.updateContact = async(req,res)=>{
    try {
       const {id} = req.params
       await Contact.findByIdAndUpdate(id,{$set:req.body}) 
       res.status(200).send('Updated Contact')
    } catch (error) {
        res.status(500).send('Could not Update Contact')
    }
}

exports.getOneContact = async(req,res)=>{
    try {
        const {id} = req.params
      const contactF =  await Contact.findById(id)
            res.status(200).send({Msg:"Contact Found",contactF})
    } catch (error) {
        res.status(500).send('Contact Not Found')
    }
}