import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  optionCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    padding: '5px 5px',
    marginTop: '20px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
    cursor: 'pointer',
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
    '&:hover': {
      filter: `drop-shadow(-1px 1px 3px ${theme.mainBG.main})`,
    },
    '& p': {
      marginLeft: '10px',
      fontSize: '1.15rem',
      fontWeight: '700',
      color: theme.mainBG.main,
    },
  },
  activeCard: {
    extend: 'optionCard',
    backgroundColor: theme.blue.main,
  },
  activeOptionCard: {
    extend: 'soloCard',
    backgroundColor: theme.blue.main,
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '2.25rem',
  },
}));
