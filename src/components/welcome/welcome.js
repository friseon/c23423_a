import WelcomeView from './welcome-view';

export default class Welcome {
    showWelcome = () => {
        const welcome = new WelcomeView();
        welcome.changeView(welcome);
        console.log('Welcome!');
    }
}
