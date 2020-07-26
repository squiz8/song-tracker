module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tracker',
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'tracker',
        
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './songtracker.sqlite'
        }
    }
}