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
    fontSize: '.6rem',
    margin: '2px 0',
    padding: '0 2px',
    borderRadius: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.dark.quarterAlpha,
    },
  },
  icon: {
    marginRight: '2px',
  },
}));
