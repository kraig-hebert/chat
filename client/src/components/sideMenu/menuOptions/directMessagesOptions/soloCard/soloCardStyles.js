import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  soloCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    padding: '0 5px',
    marginBottom: '20px',
    backgroundColor: theme.tertiary.main,
    borderRadius: '5px',
    cursor: 'pointer',
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
  },
  activeSoloCard: {
    extend: 'soloCard',
    backgroundColor: theme.blue.main,
  },
  icon: {
    color: theme.mainBG.main,
    fontSize: '1.8rem',
  },
}));
