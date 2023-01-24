import {config} from 'dotenv'

//nos dispone de las variables de entorno
config()

//USER esta reservado y saldra aledale (nombre del usuario actual del sistema)
//console.log(process.env.USER);
export const PORT = process.env.PORT

export default {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'mysql_node_restapi',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'QQuuaa123789@',
    port:process.env.DB_PORT || '3306'
}