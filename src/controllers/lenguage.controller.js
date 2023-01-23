import { response } from "express"
import { getConnection } from "../database/database.js"

const getLanguage = async (req,res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT id,name,programmers FROM language")
        res.json(result[0])
    } catch (error) {
        res.status(500)
        res.json({message:error})
    }
}



export const methods = {
    getLanguage
}