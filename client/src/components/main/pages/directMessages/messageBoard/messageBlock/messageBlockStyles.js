import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBlock: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: props.alignItems,
    width: '100%',
    padding: '10px',
    marginTop: '5px',
  }),
  messageHeader: {
    display: 'flex',
    marginBottom: '5px',

    '& p': {
      fontSize: '.8rem',
      '&:first-of-type': {
        color: theme.light.main,
        marginRight: '10px',
      },
      '&:last-of-type': {
        color: theme.secondary.main,
        marginRight: '10px',
      },
    },
  },
  messageText: (props) => ({
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: props.backgroundColor,
    '& p': {
      fontSize: '.85rem',
    },
  }),
}));
