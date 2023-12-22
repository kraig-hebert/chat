import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBlock: {
    display: 'flex',
    width: '100%',
    height: '60px',
    borderRadius: '5px',
    backgroundColor: theme.tertiary.main,
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
  },
}));
