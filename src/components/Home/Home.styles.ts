import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  home: {
    maxWidth: '800px',
    maxHeight: '800px',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    paddingTop: '30%',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center'
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '20px',
    '& button': {
      marginBottom: '20px',
      width: '200px'
    }
  },
});

export default useStyles