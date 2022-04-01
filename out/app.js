"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const root_route_1 = __importDefault(require("./routes/root.route"));
const users_rote_1 = __importDefault(require("./routes/users.rote"));
const path_1 = __importDefault(require("path"));
const tasks_route_1 = __importDefault(require("./routes/tasks.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.use(express_1.default.static(path_1.default.join(__dirname, '/../public')));
app.set('view engine', '.hbs');
app.set('views', './views');
// Root reg
app.use('/users', users_rote_1.default);
app.use('/tasks', tasks_route_1.default);
app.use('/', root_route_1.default);
app.listen(7477);
