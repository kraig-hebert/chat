import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menuOptions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '75%',
    height: '100%',
    border: `1px solid ${theme.tertiary.main}`,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: theme.secondary.main,
  },
}));
