export default {
    canvas: {
        properties: {
            width: 800,
            height: 400,
        },
        startPosition: {
            x: 50,
            y: 10,
        },
        scale: (window.innerWidth / 800) * (window.innerHeight / 400),
    },
    game: {
        gravity: 0.05,
    },
};
