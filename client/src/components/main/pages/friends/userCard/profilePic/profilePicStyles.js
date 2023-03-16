import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  profilePicContainer: {
    position: 'relative',
    marginRight: '10px',
  },
  profilePic: {
    color: theme.tertiary.main,
    fontSize: '2.1rem',
  },
  statusBadge: (props) => ({
    position: 'absolute',
    top: '3px',
    right: '3px',
    width: '10px',
    height: '10px',
    backgroundColor: props.badgeColor,
    borderRadius: '50%',
    outline: `3px solid ${theme.mainBG.main}`,
    display: 'block',
  }),
}));
