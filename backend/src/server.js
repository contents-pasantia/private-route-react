import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import {Server as SocketServer} from 'socket.io';

class Server {
    constructor(port){
        this.port = port;
        this.app = express();
        this.serverHttp = http.createServer(this.app);
        this.io = this.setSocket();
        this.setMiddlewares();
        this.addSocket();
    }

    setMiddlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    setSocket(){
        return new SocketServer(this.serverHttp,{
           cors: {
              origin: "http://127.0.0.1:5173",
            },
        });
    }

    addSocket(){
       // this.io  = new SocketServer(this.serverHttp);
       this.io.on('connection', (socket) => {
        //    console.log('a user connected');
        socket.on("message", (body) => {
          console.log(body);
          socket.broadcast.emit("message", {
            body: body.body,
            from: body.from,
           // from: socket.id.slice(8),
          });
        });
       })
    }

    start(){
        this.serverHttp.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;