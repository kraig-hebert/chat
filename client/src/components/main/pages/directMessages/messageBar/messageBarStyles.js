import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBar: (props) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '50px',
  }),
  inputPlaceholder: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.light.main,
    fontSize: '.8rem',
    pointerEvents: 'none',
  },
  input: {
    width: '92%',
    height: '100%',
    backgroundColor: theme.secondary.main,
    borderRadius: '5px',
    border: 'none',
    '&:active, &:focus': {
      outline: '2px solid ' + theme.blue.main,
    },
  },
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
