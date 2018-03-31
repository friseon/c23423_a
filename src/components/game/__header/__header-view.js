import Template from './../../template';

class HeaderView extends Template {
    constructor(scope = {}) {
        super();
        this.data = scope;
    }

    bind = (context, scope) => {
        const homeButton = context.element.querySelector('.header__button-home');
        homeButton.onclick = () => {
            console.log('GO HOME!');
            scope.goHome();
            // scope.changeExp();
            console.log(this.data);
        };
    }

    template = () => (`
            <header class="header__wrapper">
                <h1>Header</h1>
                <button class="header__button-home">GO HOME!</button>
                ${this.data.experience}
            </header>
        `).trim();
}

export default HeaderView;
