export const currentUser = {
  username: 'khebert24',
  firstName: 'Kraig',
  lastName: 'Hebert',
};

export const users = [
  {
    id: 1,
    username: 'XjsmithX',
    firstName: 'Jacob',
    lastName: 'Smith',
    friendStatus: 'friend',
    onlineStatus: 'online',
  },
  {
    id: 2,
    username: 'cluelessWonderman',
    firstName: 'Guy',
    lastName: 'Gadot',
    friendStatus: 'pending',
    requestDirection: 'out',
    onlineStatus: 'online',
  },
  {
    id: 3,
    username: 'MontySnek',
    firstName: 'Hillary',
    lastName: 'Martin',
    friendStatus: 'pending',
    requestDirection: 'out',
    onlineStatus: 'online',
  },
  {
    id: 4,
    username: 'HomerSimp',
    firstName: 'Marcus',
    lastName: 'Roberts',
    friendStatus: 'pending',
    requestDirection: 'in',
    onlineStatus: 'asleep',
  },
  {
    id: 5,
    username: 'theDRUMF',
    firstName: 'Donald',
    lastName: 'Trump',
    friendStatus: 'blocked',
    blockDirection: 'in',
    onlineStatus: 'offline',
  },
  {
    id: 6,
    username: 'Da-Mayne-Qwayne',
    firstName: 'Ashley',
    lastName: 'Perkins',
    friendStatus: 'friend',
    onlineStatus: 'online',
  },
  {
    id: 7,
    username: 'LIGERwoods',
    firstName: 'Tim',
    lastName: 'Miller',
    friendStatus: 'friend',
    onlineStatus: 'offline',
  },
  {
    id: 8,
    username: 'dark.brandon',
    firstName: 'Joe',
    lastName: 'Biden',
    friendStatus: 'blocked',
    blockDirection: 'out',
    onlineStatus: 'asleep',
  },
];

export const groups = [
  {
    title: 'Siblings',
    members: ['XjsmithX', 'HomerSimp', 'MontySnek'],
    unread: 2,
  },
  {
    title: 'Homies',
    members: ['LIGERwoods', 'Da-Mayne-Qwayne', 'MontySnek'],
    unread: 0,
  },
  {
    title: 'Enemies',
    members: ['dark.brandon', 'theDRUMF'],
    unread: 6,
  },
];
