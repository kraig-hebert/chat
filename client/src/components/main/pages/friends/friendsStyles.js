import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  friends: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: props.height,
    marginTop: '10px',
    overflow: 'hidden',
  }),
}));
