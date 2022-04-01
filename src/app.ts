import PromptSync from "prompt-sync";
const prompt = PromptSync()

import express, { query } from 'express';
import { engine } from 'express-handlebars';
import { nanoid } from 'nanoid'
import rootRoute from './routes/root.route';
import userRoute from './routes/users.rote'
import path from 'path';
import tasksRoute from "./routes/tasks.route";


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.use(express.static(path.join(__dirname, '/../public')))
app.set('view engine', '.hbs');
app.set('views', './views');

// Root reg
app.use('/users', userRoute)
app.use('/tasks', tasksRoute)
app.use('/', rootRoute)

app.listen(7477)
