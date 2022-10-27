"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use('/static', express_1.default.static('static'));
app.set('view engine', 'ejs');
const port = 3000;
app.get('/', (req, res) => {
    let thumbnails = [
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
        "/static/thumbnails/thumb.IMG_20190609_114128.jpg"
    ];
    res.render("home", { thumbnails: thumbnails });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
