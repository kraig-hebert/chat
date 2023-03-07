import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  memberList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto',
    width: '100%',
    padding: '10px 0',
    borderTop: `1px solid ${theme.mainBG.main}`,
  },
  memberName: {
    justifySelf: 'center',
    color: theme.mainBG.main,
    fontSize: '.6rem',
    textAlign: 'center',
    margin: '2px 0',
  },
}));
