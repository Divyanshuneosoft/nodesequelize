const express = require('express');
const collegesRoutes = require('./colleges/routes/collegesRoutes');
const database = require('./database');
 class App{
    app = express();
    constructor(){
        this.onInit()
    }
    onInit(){
        const port = process.env.PORT || 3000;
        this.app.use(express.json())
        this.app.use('/apis/colleges',collegesRoutes.router)
        this.app.listen(port,()=>{
            console.log(`port is connected on ${port}`)
        })
    }
}
exports.app = new App()