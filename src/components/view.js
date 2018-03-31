class View {
    template = () => {
        throw new Error('You have to define template fo view');
    }

    render = () => {
        const outer = document.createElement('div');
        outer.className = 'view';
        outer.innerHTML = this.template();
        return outer;
    }

    bind = () => { /* listeners */ }

    getView = () => {
        if (!this.element) {
            this.element = this.render();
            this.bind();
        }
        return this.element;
    }

    update = () => {
        const main = document.getElementById('main');
        main.innerHTML = '';
        this.element = this.render();
        this.bind();
        main.appendChild(this.element);
    }

    changeView = (view) => {
        const main = document.getElementById('main');
        main.innerHTML = '';
        main.appendChild(view.getView());
    };
}

export default View;
