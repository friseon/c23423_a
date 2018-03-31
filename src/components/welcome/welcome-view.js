import View from './../view';
import GameView from './../game/game-view';

class WelcomeView extends View {
    bind = () => {
        const startButton = this.element.querySelector('.welcome__button-start');
        startButton.onclick = () => {
            const gameView = new GameView();
            this.changeView(gameView);
        };
    }

    template = () => (`
            <div class="welcome__wrapper">
                <h1>Hello World! This is THE GAME BLEД!</h1>
                <p>Your goal is live. Job and live! But jobbing is more important.</p>
                <button class="welcome__button-start">START this fucking game!</button>
            </div>
        `).trim();
}

export default WelcomeView;
