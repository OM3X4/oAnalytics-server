import express from 'express';
import cors from 'cors';
import geoip from 'geoip-lite';
import { PrismaClient } from '@prisma/client';
import { UAParser } from 'ua-parser-js';


const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post('/log', async (req, res) => {

    const rawIp = req.ip?.startsWith("::ffff:") ? req.ip.substring(7) : req.ip;
    console.log(rawIp)
    // const rawIp = "1.0.1.0"

    const geo = geoip.lookup(rawIp ?? "0.0.0.0");

    req.body.ip = req.ip

    console.log(req.headers.origin)
    const parser = new UAParser(
        req.headers['user-agent']
    );
    await prisma.event.create({
        data: {
            app_id: req.body.app_id,
            client_id: req.body.client_id,
            session_id: req.body.session_id,
            path: req.body.path,
            country: geo?.country,
            date: new Date(),
            browser: parser.getResult().browser.name,
            os: parser.getResult().os.name
        }
    })

    console.log(geo)
    console.log(req.body);
    res.status(200).json({ success: true }); // ✅ send response
})


app.listen(3001, () => {
    console.log('Server is running on port 3000');
});