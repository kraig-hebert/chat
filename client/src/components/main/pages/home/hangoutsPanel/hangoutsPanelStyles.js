import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  hangouts: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)' /* Two columns */,
    gridTemplateRows: 'repeat(3, auto)',
    width: '100%',
    height: '300px',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
    paddingTop: '20px',
  },
  editFavorites: {
    position: 'absolute',
    left: '5px',
    top: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
    '&:hover': {
      '& span, svg': {
        color: theme.mainBG.main,
      },
    },
    '& span': {
      marginLefet: '10px',
      color: theme.tertiary.main,
      fontSize: '.8rem',
      fontWeight: '600',
    },
  },
  editIcon: {
    color: theme.tertiary.main,
    fontSize: '2rem',
  },
}));
