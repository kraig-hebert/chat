import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  menuOptions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '75%',
    height: '100%',
    padding: '10px 0',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    // borderTop: `1px solid ${theme.tertiary.main}`,
    // borderRight: `1px solid ${theme.tertiary.main}`,
    // borderBottom: `1px solid ${theme.tertiary.main}`,
    backgroundColor: theme.secondary.main,
  },
}));
