import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  memberList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto',
    width: '90%',
    padding: '10px 0',
    borderTop: `1px solid ${theme.mainBG.main}`,
  },
  memberName: {
    justifySelf: 'center',
    color: theme.mainBG.main,
    width: '100%',
    fontSize: '.6rem',
    textAlign: 'left',
    margin: '2px 0',
    borderRadius: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.dark.quarterAlpha,
    },
  },
}));
