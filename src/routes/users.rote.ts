import { Router } from "express";

const router = Router()

// Users
router.get('/', (req, res) => {
    res.render('users')
})

router.post('/', (req, res) => {
    const { name, surname } = req.body
    
    res.redirect('users')
})

//Users id
router.get('/users/:id', (req, res) => {
    res.render('user-tasks')
})

export default router