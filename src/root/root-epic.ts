import { combineEpics, Epic } from 'redux-observable';

import { epic } from '../store';
import { epic as userMfEpic } from 'dmf_user/store';
const allEpics: Epic[] = [...epic.configEpic];
allEpics.push(...userMfEpic.userEpic);
console.log(allEpics, userMfEpic.userEpic);
const rootEpics = combineEpics(...allEpics);

export default rootEpics;
