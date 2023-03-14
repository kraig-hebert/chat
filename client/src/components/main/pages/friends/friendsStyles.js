import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  friends: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: props.height,
    overflow: 'hidden',
  }),
}));
