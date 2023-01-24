import { getConnection } from "../database/database.js"

const getLanguages = async (req,res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT id,name,programmers FROM language")
        res.json(result[0])
    } catch (error) {
        res.status(500)
        res.json({message:error})
    }
}

const getLanguage = async (req,res) => {
    try {
        const {id} = req.params
        if(Number(id) === NaN) {
            res.status(400).json({message:"Bad request. Incorrect id"})
        }
        const connection = await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id)
        if(result[0].length===0){
            res.status(400).json({message:"Bad request. Incorrect id"})
        } else {
            res.json(result[0])
        }
    } catch (error) {
        res.status(500)
        res.json({message:error})
    }
} 

const addLanguage = async (req,res) => {
    try {
        const {name, programmers} = req.body
        if(name===undefined || programmers===undefined) {
            res.status(400).json({message:"Bad request. Please fill all field."})
        }
        const body = {name, programmers}
        const connection = await getConnection()
        await connection.query("INSERT INTO language SET ?", body)
        res.json({message:"Language posted succefully!"})
    } catch (error) {
        res.status(500)
        res.json({message:error})
    }
}

const deleteLanguage = async (req,res) => {
    try {
        const {id} = req.params
        if(Number(id) === NaN) {
            res.status(400).json({message:"Bad request. Incorrect id"})
        }
        const connection = await getConnection()
        await connection.query("DELETE FROM language WHERE id = ?",[id])
        res.json({message:"Language deleted succefully!"})
    } catch (error) {
        res.status(500)
        res.json({message:error})
    }
}

const editLanguage = async (req,res) => {
    try {
        const {id} = req.params
        const {name, programmers} = req.body
        if(name===undefined || programmers===undefined){
            return res.status(400).json({message:"Bad request. Please fill a field."})
        }
        const updateLanguage = {
            name,
            programmers,
        }
        const connection = await getConnection()
        const result = await connection.query("UPDATE language SET ? WHERE id = ?",[updateLanguage, id])
        if(result[0].affectedRows === 0){
            return res.status(400).json({message:"Bad request. Incorrect id"})
        }
        res.json({message:"Language updated succefully!"})

    } catch (error) {
        res.status(500)
        res.json({message:error})
    }
}

export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    deleteLanguage,
    editLanguage
}