const express = require('express');
const responses = require('../../responses');
const collegesController = require('../controllers/collegesController');
class Colleges{
 router;
 constructor(){
    this.router = express.Router()
    this.onInit()
 }
 async onInit(){
    this.router.post('/add',async(req,res)=>{
        try {
            let response = await collegesController.createData(req)
            return responses.send(res,response)
        } catch (error) {
            return responses.send(res,error)
        }
    })
    this.router.get('/list',async(req,res)=>{
        try {
            let response = await collegesController.findAll(req)
            return responses.send(res,response)
        } catch (error) {
            return responses.send(res,error)
        }
    })
    this.router.get('/details',async(req,res)=>{
        try {
            let response = await collegesController.find(req)
            return responses.send(res,response)
        } catch (error) {
            return responses.send(res,error)
        }
    })
    this.router.put('/update',async(req,res)=>{
        try {
            let response = await collegesController.update(req)
            return responses.send(res,response)
        } catch (error) {
            return responses.send(res,error)
        }
    })
    this.router.get('/delete',async(req,res)=>{
        try {
            let response = await collegesController.delete(req)
            return responses.send(res,response)
        } catch (error) {
            return responses.send(res,error)
        }
    })
 }
}
module.exports = new Colleges()