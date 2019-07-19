import {placeRobot, moveRobot, rotateRobot, reportPosition} from './robot';
import {initialState, faces, directions} from './robotConfig';

export default function controller(state = initialState, action) {
    switch (action.type) {
        case 'PLACE':
            return placeRobot(state, action.placeValues);
        case 'ROTATE':
            return rotateRobot(state, action.facing);
        case 'MOVE':
            return moveRobot(state);
        case 'REPORT':
            return reportPosition(state);
        case 'ERROR':
            return error();
    }
    return state;
}