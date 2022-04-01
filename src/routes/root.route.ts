import { Router } from "express";

const root = Router()

root.get('/', (req, res) => {
    res.redirect('tasks')
})

export default root