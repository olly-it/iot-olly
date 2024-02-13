/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

/* firebase service */
import { FirebaseService } from './firebase.service';


dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

 /**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const firebaseService:FirebaseService = new FirebaseService();
/**
 * rest controllers
 */
app.get('/', (req: Request, res: Response) => {
    firebaseService.getMorse().then((x) => {
        console.log('morse:', JSON.stringify(x));
        res.send({"morse":x});
      });
});