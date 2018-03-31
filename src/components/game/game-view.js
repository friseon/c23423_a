import View from './../view';
import WelcomeView from './../welcome/welcome-view';
import HeaderView from './__header/__header-view';
import { state } from './../data/state';
import Game from './game';
import options from './../data/options';

const headerView = new HeaderView(state);

class GameView extends View {
    create = () => {
        this.canvas = this.element.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.game = new Game(this.canvas, this.context);

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - 110;
        window.addEventListener('resize', () => {
            options.scale = (window.innerWidth / options.canvasProperties.width) *
                (window.innerHeight / options.canvasProperties.height);
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

        startButton.onclick = () => {
            this.game.start();
        };

        changeButton.onclick = () => {
            console.log('Change!');
            // state.changeExperience(2);
            this.game.upExp();
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
