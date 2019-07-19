export function place(coordinates) {
    return {
        type: 'PLACE',
        coordinates
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