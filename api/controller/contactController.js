const Contact = require('../model/contactModel');



const getAllContacts = ((req, res, next) => {
    Contact.find() 
            .then(contacts => {
                res.status(200).json({
                    message: `${contacts.length} contacts in your contactbook`,
                    contacts: contacts
                })
            })
            
            .catch(err => {
                console.log(err);
                
                res.status(500).json({
                    error: 'error occured'
                })
            })
})


const createNewContact = ((req, res, next) => {  
    
    Contact.find({phone: req.body.phone})
            .then(contact => {
                if(contact.length > 0){
                    res.json({
                        message: 'this number already exits!'
                    })
                } else {
                    

                    let newContact = new Contact({ 
                        author: req.user._id, 
                        name: req.body.name,
                        phone: req.body.phone,
                        email: req.body.email,
                    })

                    newContact.save()
                                .then(result => {
                                    res.status(200).json({
                                        message: 'Contact saved!',
                                        contact: result
                                    })
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        error: 'error occured'
                                    })                                    
                                })
                }
            })
            
            .catch(err => {
                console.log(err);
                
                res.status(500).json({
                    error: 'error occured'
                })
            })
    
})

const getSingleContact = ((req, res, next) => {
    let id = req.params.id;

    Contact.findById(id) //start from here
            .then(result => {
                if(result) {
                    res.status(200).json({
                        contact: result
                    })
                }
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    error: 'error occured'
                })                
            })
})


const updateContactById = ((req, res, next) => {
    let id = req.params.id;

    Contact.findByIdAndUpdate(id, {$set: req.body})
            .then(updatedContact => {
                if(updatedContact){
                    Contact.findById(updatedContact._id)
                            .then(contact => {
                                res.status(200).json({
                                    message: 'Contact updated',
                                    contact: contact
                                })
                            })
                }else{
                    res.status(400).json({
                        error: 'error occured'
                    })
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: 'error occured'
                })                
            })
})



const deleteContactById = ((req, res, next)=>{
    let id = req.params.id;

    Contact.findByIdAndRemove(id)
            .then(result => {
                if(result){
                    res.status(200).json({
                        message: 'contact deleted',
                        deletedConact: result
                    })
                }else{
                    res.status(400).json({
                        error: 'error occured'
                    })
                }
                
            })
            .catch(err => {
                console.log(err);
                
                res.status(500).json({
                    error: 'error occured'
                })
            })
})

module.exports = {
    getAllContacts, 
    createNewContact,
    getSingleContact,
    updateContactById,
    deleteContactById
}