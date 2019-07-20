export function place(commandValues) {
    return {
        type: 'PLACE',
        commandValues
    };
}

export function move() {
    return {
        type: 'MOVE'
    };
}

export function report() {
    return {
        type: 'REPORT'
    };
}

export function rotate(direction) {
    return {
        type: 'ROTATE',
        direction
    };
}

export function error(message) {
    return {
        type: 'ERROR',
        message
    };
}