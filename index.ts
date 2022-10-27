import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
const port = 3000

app.get('/', (req: Request, res: Response) => {
  let thumbnails:string[] = [
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg",
    "/static/thumbnails/thumb.IMG_20190609_114128.jpg"
      
  ]
  res.render("home",{thumbnails:thumbnails})
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});