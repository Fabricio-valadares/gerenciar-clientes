import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import { user } from "./http/router/userRoute"
import { AppError } from "./error"

import { connectdb } from "./typeorm"
import cors from "cors"

connectdb()
const app = express()
app.use(express.json())
app.use(cors())

app.use(user)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.status).json({
            status: "error",
            messagem: error.message
        })
    }

    return response.status(500).json({
        error: "error",
        messagem: "Interval error server"
    })
})

app.listen(3333, () => {
    console.log("server rodando !")
})
