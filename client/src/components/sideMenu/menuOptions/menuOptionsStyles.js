import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menuOptions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '75%',
    height: '100%',
    border: `2px solid ${theme.light.main}`,
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    backgroundColor: theme.secondary.main,
  },
}));
