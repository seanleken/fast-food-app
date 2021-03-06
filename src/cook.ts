import { Carousel, ServiceQueue } from ".";

export default class Cook {
    constructor(
        private carousel: Carousel,
        private serviceQueue: ServiceQueue
    ){}

    prepareOrder = ()=> {
        //get next order from carousel 
        const order = this.carousel.shift();
        if(order)
        //prepare order
        //place in service queue
        setTimeout(() => {
            this.serviceQueue.push(order)
        }, 20)
    }
}

