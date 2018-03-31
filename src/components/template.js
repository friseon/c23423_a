class Template {
    template = () => {
        throw new Error('You have to define template for Template');
    }

    bind = () => { /* listeners */ }

    changeData = (data) => {
        this.template(data);
    };
}

export default Template;
