import { ExpressServer } from './utils/server';
import { server } from './config/config'
import { client } from './config/DbConfig';
// Connect to the database
client.connect()
    .then(() => {
        try {
            const Server = new ExpressServer(server.SERVER_PORT);
            console.log("Databse Connected Success->!!!")
            Server.start("Hello");
        }
        catch (err) {
            console.log(err);
        }
    })
    .catch((err: any) => console.error('Connection error', err.stack))
    .finally(() => client.end()); // Close the connection

