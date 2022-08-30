import { assertIsTypedArray, isITeam, ITeam } from '.';

const team1: ITeam = null; // $ExpectError: Type 'null' is not assignable to type 'ITeam'.
const team2: ITeam = { channels: [], name: '', iconUrl: '', id: '' };
