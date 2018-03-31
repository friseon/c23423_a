import options from './../../data/options';

/**
 * Конструктор объекта в Canvas
 * @param {*} canvas
 * @param {*} context
 * @param {String} gameObject
 * @param {Number} width
 * @param {Number} height
 * @param {Number} x
 * @param {Number} y
 */

export default class GameObject {
    constructor(canvas, context, gameObject, width, height, x, y) {
        this.canvas = canvas;
        this.context = context;
        this.gameObject = gameObject;
        this.fontSize = 30 * options.canvas.scale > 60 ? 60 : 30;
        this.height = height || parseInt(this.fontSize, 10) + 10;
        this.width = width || context.measureText(gameObject.name).width + 10;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.gravitySpeed = 0;

        if (this.gameObject.type === 'player') {
            this.width = parseInt(this.fontSize, 10) + 10;
            this.height = parseInt(this.fontSize, 10) + 10;
        }

        this.draw();
    }

    /**
     * Отрисовка объекта
     */
    draw = () => {
        const context = this.context;
        console.log('draw');
        if (this.gameObject.type === 'text') {
            context.fillStyle = this.gameObject.color;
            context.font = `${this.fontSize / 3}px Arial`;
            context.fillText(this.text, this.x, this.y);
        } else {
            context.font = `${this.fontSize}px Arial`;
            context.fillStyle = this.gameObject.color;
            context.fillRect(this.x, this.y, this.width, this.height);
            context.textBaseline = 'top';
            context.fillStyle = 'white';
            context.fillText(this.gameObject.name, this.x + 5, this.y);
        }
    };

    /**
     * Обновить расположение
     */
    updatePosition = () => {
        this.gravitySpeed += options.game.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;

        const borderBottom = this.canvas.height - this.height;

        if (this.y >= borderBottom) {
            this.y = borderBottom;
            this.gravitySpeed = 0;
            this.energy -= 1;
        } else if (this.y <= 0) {
            this.y = 0;
            this.gravitySpeed = 0;
            this.energy -= 1;
        }
    };

    /**
     * Столкновение с другими объектами
     * 
     * @param {*} otherobj
     */
    strikeWith = (otherobj) => {
        const myleft = this.x;
        const myright = this.x + (this.width);
        const mytop = this.y;
        const mybottom = this.y + (this.height);
        const otherleft = otherobj.x;
        const otherright = otherobj.x + (otherobj.width);
        const othertop = otherobj.y;
        const otherbottom = otherobj.y + (otherobj.height);
        let isStrike = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            isStrike = false;
        }
        return isStrike;
    };
}
