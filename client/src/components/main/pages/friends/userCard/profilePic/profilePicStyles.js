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
  statusBadge: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    width: '13px',
    height: '13px',
    backgroundColor: 'green',
    borderRadius: '50%',
    border: `3px solid ${theme.mainBG.main}`,
    display: 'block',
  },
}));
