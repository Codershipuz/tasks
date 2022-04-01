import { Router } from "express";

const router = Router()

// Tasks
router.get('/', (req, res) => {
    res.render('tasks')
})

router.post('/tasks', (req, res) => {
    let { userId, content } = req.body
    res.redirect('tasks')
})

export default router