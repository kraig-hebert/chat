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
    backgroundColor: 'yellow',
  }),
  messageHeader: {
    display: 'flex',
    '& p': {
      fontSize: '.8rem',
      '&:first-of-type': {
        marginRight: '10px',
      },
    },
  },
}));
