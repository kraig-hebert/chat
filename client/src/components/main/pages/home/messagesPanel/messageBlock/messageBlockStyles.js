import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  messageBlock: {
    position: 'relative',
    display: 'flex',
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
