import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  profilePicContainer: {
    position: 'relative',
    marginRight: '10px',
  },
  profilePic: {
    backgroundColor: theme.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
    margin: '5px',
    borderRadius: '50%',
    border: `2px solid ${theme.tertiary.main}`,
    fontSize: '2.1rem',
    '& h3': {
      fontSize: '1.25rem',
      color: theme.mainBG.main,
    },
  },
  statusBadge: (props) => ({
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '8px',
    height: '8px',
    backgroundColor: props.badgeColor,
    borderRadius: '50%',
    outline: `2px solid ${theme.mainBG.main}`,
    display: props.badgeColor === 'transparent' ? 'none' : 'block',
  }),
}));
