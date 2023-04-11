import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  memberList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto',
    width: '100%',
    margin: '5px 0',
    padding: '10px 5px',
    backgroundColor: theme.light.halfAlpha,
    border: `1px solid ${theme.mainBG.main}`,
    borderRadius: '3px',
  },
  memberName: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: theme.mainBG.main,
    width: '100%',
    height: '15px',
    fontSize: '.6rem',
    margin: '2px 0',
    padding: '0 2px',
    borderRadius: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.dark.quarterAlpha,
    },
  },
  statusBadge: {
    display: 'flex',
    width: '6px',
    height: '6px',
    border: `1px solid ${theme.mainBG.main}`,
    borderRadius: '50%',
    margin: '3px 2px 2px 2px',
  },
  online: {
    extend: 'statusBadge',
    backgroundColor: 'green',
  },
  asleep: {
    extend: 'statusBadge',
    backgroundColor: 'yellow',
  },
  offline: {
    extend: 'statusBadge',
    backgroundColor: 'red',
  },
}));
