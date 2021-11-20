const Contact = require("../models/Contact");

exports.postContact = async (req,res)=>{
  try{ 
    const newContact = new Contact({...req.body})
    if(!newContact.email){
      res.status(400).send({message: 'email is required brroo'});
      return;
    }
    const user= await Contact.findOne({email: req.body.email})
    if(user){
      res.status(400).send({message: 'user already exist'});
      return;
    }
    const response = await newContact.save();
    res.send({response: response, message: 'user is saved' });
  }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
  }
}

exports.GetAllContact = async (req,res)=>{
  try{
    const result= await Contact.find();
    res.send({response: result, message: `getting contacts successfully `})
  } catch(error){
    res.status(500).send({message: `can not get contacts `})
  }
}

exports.GetContactById = async (req,res)=>{
  try {
    const result= await Contact.findOne({_id:req.params.id});
    res.send({response: result, message: 'getting contact successfully'})
  } catch (error) {
    res.status(500).send({message: `can not get contact with id ${req.params.id} `})
  }
}

exports.deleteContact = async (req,res)=>{
  try {
    const result= await Contact.deleteOne({_id:req.params.id});
    result.n
      ? res.send({response:"user delete"})
      : res.send({message: `there is no contact with id: ${req.params.id} `})
  } catch (error) {
    res.status(500).send({message: `there is no id`})
  }
}

exports.updateContact = async (req,res)=>{
  try {
    const result= await Contact.updateOne(
      {_id:req.params.id},
      {$set:{...req.body}}
    );
    console.log(result) ;
    result.nModified
      ? res.send({message:"user updated"})
      : res.send({message:"contact already updated"})
  } catch (error) {
    res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
  }
}