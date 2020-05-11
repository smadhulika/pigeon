import {createExpressServer, useContainer } from "routing-controllers";
import {Controllers} from './controllers';
import {Container} from "typedi";
module.exports = async (port) => {
    useContainer(Container);
    var app = createExpressServer({
        controllers: Controllers,
        routePrefix: "/api/v1",
        cors: {
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            allowedHeaders: ["X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"],
            exposedHeaders: ['X-Total-Length', 'Authorization', 'Content-Type', 'X-Total-Page'],
            credentials: false   
        }
    })

    app.listen(port, (err) => {
        if(err) {
            console.log(`unable to start server due to ${err}`);
        }
            console.log(`server running at ${port}`);
    });

}
