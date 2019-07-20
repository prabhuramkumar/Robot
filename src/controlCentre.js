import {placeRobot, moveRobot, rotateRobot, reportPosition, errorUpdate} from './robot';
import {initialState, faces, directions} from './robotConfig';

export default function controller(state = initialState, command) {
    switch (command.type) {
        case 'PLACE':
            return placeRobot(state, command.commandValues);

        case 'ROTATE':
            return rotateRobot(state, command.direction);

        case 'MOVE':
            return moveRobot(state, command);

        case 'REPORT':
            return reportPosition(state);

        case 'ERROR':
            return errorUpdate(state, command.message);
    }
    return state;
}