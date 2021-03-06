/**
 * 
 * 
 * 
 * 
 * 
 * ¯\_(ツ)_/¯
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


import OrderTaker from './order-taker';
import Cook from './cook';
import Server from './server'
import { v4 } from 'uuid';

export type Order = string;

export type Carousel = Order[];
export type ServiceQueue = Order[];

function simulation() {
    const carousel: Carousel = [];
    const serviceQueue: ServiceQueue = [];
    const customerQueue: string[] = [];
    const orderTaker = new OrderTaker(carousel);
    const cook = new Cook(carousel, serviceQueue);
    const server = new Server(serviceQueue);

    //perhaps have a loop that checks whether the customer queue is empty 

    setInterval(() => {
        //run simulation
        //generate customer uuid and add to queue
        customerQueue.push(v4());
    }, 10)
}

simulation();