import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  badge: (props) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    transform: 'translateX(-30%) translateY(-30%)',
    display: props.badgeCount > 0 ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.7rem',
    width: '17px',
    height: '17px',
    backgroundColor: theme.mainBG.main,
    color: theme.light.main,
    borderRadius: '50%',
  }),
}));
