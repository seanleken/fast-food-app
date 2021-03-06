import { v4 } from 'uuid';
import { Carousel } from '.';
export default class OrderTaker {
    constructor(private carousel: Carousel){}

    takeOrder = () => {
        //generate order number
        this.carousel.push(v4())
    }
}