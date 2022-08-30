import { ITeam } from '../../src/types';
import { expectAssignable, expectNotAssignable } from 'tsd';

//const team1: ITeam = null;
expectNotAssignable<ITeam>(null);
//const team2: ITeam = { channels: [], name: '', iconUrl: '', id: '' };
expectAssignable<ITeam>({
  channels: [],
  name: '',
  iconUrl: '',
  id: '',
});
