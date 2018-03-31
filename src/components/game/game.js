import { state } from './../data/state';

export default class Game {
    constructor() {
        state.changeExperience(0);
    }

    upExp = () => {
        state.changeExperience(1);
    }
}
