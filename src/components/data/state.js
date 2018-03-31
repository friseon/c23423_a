import { POSITIONS } from './constants';

export const initialState = {
    experience: 0,
    position: POSITIONS.noob,
    time: 0,
};

class State {
    constructor(state = initialState) {
        this.experience = state.experience;
        this.position = state.position;
        this.time = state.time;
    }

    changeExperience = (value) => {
        this.experience += value;
    }

    cleatState = () => {
        this.experience = initialState.experience;
        this.position = initialState.position;
        this.time = initialState.time;
    }
}

export const state = new State();
