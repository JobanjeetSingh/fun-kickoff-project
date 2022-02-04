import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: '14px !important',
    paddingLeft: '5px',
    marginTop: '1rem',
    fontWeight: 'bold !important',
    textTransform: 'uppercase',
  },
  inputs: {
    height: '2rem',
    padding: '0.5rem 1rem',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 55,
    borderRadius: theme.shape.borderRadius,
    fontSize: '18px !important',
    backgroundColor: '#D82E2F !important',
    fontWeight: 'bolder',
  },
}));

export default useStyles;
