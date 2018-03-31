import { state } from './../data/state';
import GameObject from './__object/__object';

export default class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        state.changeExperience(0);
    }

    start = () => {
        const playerProps = {
            type: 'player',
            name: 'Я',
            color: '#28916E',
        };
        const player = new GameObject(this.canvas, this.context, playerProps, null, null, 50, 50);
        // player.updatePosition();
        console.log(player);
        // player.draw();
    }

    upExp = () => {
        state.changeExperience(1);
    }
}
