import WelcomeView from './welcome/welcome-view';

class App {
    constructor(state) {
        this.view = state || 'temp';
    }

    greet = () => {
        const welcomeView = new WelcomeView();
        welcomeView.changeView(welcomeView);
    }
}

export default App;
