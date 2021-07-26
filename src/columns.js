import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '1px 3px 5px 30px',
  },
  paper: {
    height: 340,
    width: 500,
  },
  control: {
    padding: theme.spacing(2),

  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (

    <Grid container className={classes.root} spacing={2}>
    
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search Domain" />
    </form>
    
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {[0, 1].map((value) => (

            <Grid key={value} item>
            {value==0?<ListItemText primary="Domains" />:<ListItemText primary="Cool Domains" />}
            

              <Paper className={classes.paper} >
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Amazin.com" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Doraemon.com" />
                </ListItem>
              </List>
              <Divider />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="own.com" />
                </ListItem>
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Google.com" />
                </ListItemLink>
              </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}