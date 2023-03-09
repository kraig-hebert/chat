import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  curtainSliderContainer: (props) => ({
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: props.curtainSliderIsOpen ? '700px' : '0px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    backgroundColor: theme.tertiary.main,
    transition: 'height .25s',
    overflow: 'hidden',
  }),
  icon: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    color: theme.mainBG.main,
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
}));
