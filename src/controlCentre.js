import {place, move, rotate, report} from './robot';


const INITIAL_STATE ={};
export default function controller(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PLACE':
            return place(state, action.position);
        case 'ROTATE':
            return rotate(state, action.direction);
        case 'MOVE':
            return move(state);
        case 'REPORT':
            return report(state);
    }
    return state;
}