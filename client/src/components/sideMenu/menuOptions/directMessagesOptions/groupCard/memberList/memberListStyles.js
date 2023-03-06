import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  memberList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto',
    width: '100%',
    margin: '10px 0',
  },
  memberName: {
    justifySelf: 'center',
    color: theme.mainBG.main,
    fontSize: '.6rem',
    textAlign: 'center',
    margin: '1px 0',
  },
}));
