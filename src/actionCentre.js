export function place(placeValues) {
    return {
        type: 'PLACE',
        placeValues
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

export function error() {
    return {
        type: 'ERROR'
    };
}