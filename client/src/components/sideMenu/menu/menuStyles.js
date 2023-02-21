import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
    height: '100%',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    backgroundColor: theme.light.main,
  },
}));
