import express from "express"
import http from 'http';
import * as bodyParser from 'body-parser';
import { createRoutes } from "./RouterClass";
import dotenv from 'dotenv';
import { Mainrouter } from "./MainRoute";

// Load environment variables from .env file
dotenv.config();

export class ExpressServer {
    readonly port: number;
    public app: express.Application;
    constructor(port: number) {
        this.app = express();
        this.port = port;
    }
    async start(res:string) {
        // this.app.use(express.json());
        // this.app.use(express.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        createRoutes(Mainrouter, this.app);
        const server = http.createServer(this.app);
        server.listen(this.port, () => console.info(`${res} Server running at port ${this.port}`));
    }
}
