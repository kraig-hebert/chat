import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  messageBoardContainer: {
    width: '100%',
    height: '700px',
    margin: '10px 0',
    overflow: 'auto',
  },
  messageBoard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: '10px 5px',
  },
});
