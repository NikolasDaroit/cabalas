export const initialState = {
  info: {
    Name: '',
    Path: '',
    Order: '',
    Legacy: '',
    Virtue: '',
    Vice: ''
  },
  attributes: {},
  arcana: {},
  skills: {},
  merits: [],
  conditions: [],  // only once
  tilts: [],       // initialize tilts array
  aspirations: ['', '', ''],
  obsessions: [],
  healthBoxes: Array(10).fill(''),
  willpowerBoxes: Array(10).fill(''),
  mana: 0,
  wisdom: 0,
  gnosis: 1,
  beats: 0,
  arcaneBeats: 0,
  experience: 0,
  arcaneExperience: 0,
  size: 5
};
