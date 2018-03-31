import View from './../view';
import WelcomeView from './../welcome/welcome-view';
import HeaderView from './__header/__header-view';
import { state } from './../data/state';
import Game from './game';

const headerView = new HeaderView(state);
const game = new Game();

class GameView extends View {
    constructor() {
        super();
        this.options = {
            canvasProperties: {
                width: 800,
                height: 400,
            },
            startPosition: {
                x: 50,
                y: 10,
            },
            scale: (window.innerWidth / 800) * (window.innerHeight / 400),
        };
    }

    create = () => {
        this.canvas = this.element.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - 110;
        window.addEventListener('resize', () => {
            this.options.scale = (window.innerWidth / this.options.canvasProperties.width) *
                (window.innerHeight / this.options.canvasProperties.height);
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight - 110;
        });
    }

    bind = () => {
        this.create();

        const headerScope = {
            goHome: () => {
                this.changeView(new WelcomeView());
            },
        };
        const changeButton = this.element.querySelector('.game__button-change');
        const startButton = this.element.querySelector('.game__button-start');

        headerView.bind(this, headerScope);

        startButton.onclick = () => {};

        changeButton.onclick = () => {
            console.log('Change!');
            // state.changeExperience(2);
            game.upExp();
            this.update();
        };
    }

    template = () => (`
            <div class="game__wrapper">
                ${headerView.template()}
                <h1>GAME!</h1>
                <button class="game__button-change">Add exp!</button>
                <button class="game__button-start">Start</button>
                <canvas></canvas>
            </div>
        `).trim();
}

export default GameView;
