import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBar: (props) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '2px',
  }),
  messageBarButton: {
    width: '35px',
    height: '35px',
    backgroundColor: theme.blue.main,
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitIcon: {
    fontSize: '1.25rem',
  },
}));
