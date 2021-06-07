const { Sequelize } = require('sequelize');
class Database {
    sequelize;
    dbname;
    constructor(dbname) {
        if (!dbname) {
            this.sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: "src/storage.sqlite"
            });
            this.initConnection()
            return;
        }
        this.dbname = dbname
    }
    async initConnection() {
        try {
            await this.sequelize.authenticate()
            console.log('sqlite3 is connected successfully')
        } catch (error) {
            throw error
        }
    }
 
  
}
module.exports = new Database()
