import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  board: {
    backgroundImage: 'linear-gradient(to top, #051937, #133760, #1d588d, #1f7cbb, #12a2eb)',
    width: '450px',
    margin: 'auto',
  },
  action: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default useStyles