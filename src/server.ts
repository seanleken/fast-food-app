import { ServiceQueue } from ".";

export default class Server {
    constructor(private serviceQueue: ServiceQueue){}

    serve = () => {
        this.serviceQueue.shift();
    }
}