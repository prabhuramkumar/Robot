import {createStore} from 'redux';
import controller from './controlCentre';

export default function robotStore() {
    return createStore(controller);
}