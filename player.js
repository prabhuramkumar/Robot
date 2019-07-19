import robotStore from './src/robotStore';
import receiveCommand from './src/commandCentre';

const store = robotStore();

receiveCommand();