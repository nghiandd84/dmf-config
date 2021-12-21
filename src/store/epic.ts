import * as todosEpics from '../features/todos/epics';
import * as otherEpics from './other-epics';

const configEpic = Object.values(todosEpics);
const otherEpic = Object.values(otherEpics);
configEpic.push(...otherEpic);

export { configEpic };
