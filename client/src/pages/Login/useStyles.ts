import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: '36px !important',
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 'bold !important',
    textAlign: 'center',
  },
}));

export default useStyles;
