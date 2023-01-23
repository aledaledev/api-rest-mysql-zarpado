//import mysql from 'promise-mysql'
import mysql from 'mysql2/promise'
import config from '../config.js'

//durara un tiempo en acceder
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port
})

export const getConnection = () => {
    return connection
}
