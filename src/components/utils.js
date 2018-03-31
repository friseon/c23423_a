const createElement = (template) => {
    const outer = document.createElement('div');
    outer.innerHTML = template;
    return outer;
};

const remove = () => {};

export { createElement, remove };
