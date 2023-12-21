import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  home: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: props.height,
  }),
  homePanelRow: (props) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '10px',
  }),
});
