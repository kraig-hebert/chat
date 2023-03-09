import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  curtainSlider: (props) => ({
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
}));
