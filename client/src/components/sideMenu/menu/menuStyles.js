import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menu: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65px',
    height: '100%',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    backgroundColor: theme.blue.main,
  }),
  upperIcons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60%',
  },
  lowerIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
}));
