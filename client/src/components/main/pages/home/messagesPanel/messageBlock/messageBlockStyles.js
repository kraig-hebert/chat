import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBlock: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: '50px',
    margin: '5px 0',
    backgroundColor: theme.tertiary.main,
    filter: `drop-shadow(-1px 1px 1px ${theme.mainBG.main})`,
  },
  borderLeft: {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  borderRight: {
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  messageHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '150px',
    '& p:first-of-type': {
      fontSize: '.85rem',
      fontWeight: '700',
      color: theme.mainBG.main,
    },
    '& p:last-of-type': {
      fontSize: '.55rem',
      color: theme.mainBG.main,
      '& span': {
        color: theme.light.main,
      },
    },
  },
  divider: {
    display: 'block',
    width: '3px',
    height: '75%',
    backgroundColor: theme.blue.main,
    margin: '0 20px',
  },
  type: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: theme.blue.main,
    writingMode: 'vertical-lr',
    padding: '3px',
  },
  soloType: {
    extend: 'type',
    right: '100%',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  groupType: {
    extend: 'type',
    left: '100%',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
}));
