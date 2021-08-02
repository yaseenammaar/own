import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SvgIcon from '@material-ui/core/SvgIcon';
import useSearchDomain from "../hooks/useSearchDomain";
import SearchBar from "./SearchBar";
import {FixedSizeList} from "react-window";
import SuggestedDomainsList from "./DomainsGrid/SuggestedDomainsList";
import CoolDomainsList from "./DomainsGrid/CoolDomainsList";
import {bindActionCreators} from "redux";
import {setCoolSuggestions, setNormalSuggestions} from "../redux/actions/domainSuggestionsActions";
import {connect} from "react-redux";


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

function SpacingGrid(props) {


  const [spacing, setSpacing] = useState(2)
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };



  return (

    <Grid container className={classes.root} spacing={2} justifyContent={"center"}>

      <SearchBar
        searchResultChanged={(searchResult) => {
          const {
            available,
            loading,
            error,
            domain,
            suggestedDomainsList,
            coolDomainsList
          } = searchResult

        }}
      />
    
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {[0, 1].map((value) => (

            <Grid key={value} item>
            {value===0?<ListItemText primary="Suggested Domains" />:<ListItemText primary="Cool Domains" />}
            

              <Paper className={classes.paper} >
                {
                  value === 0?
                      <SuggestedDomainsList list={props.suggestions.normal}/>
                      :
                      <CoolDomainsList  list={props.suggestions.cool}/>
                }
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}

const mapStateToProps = (state) => {
    const {suggestions} = state
    return {suggestions}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        //all actions come here
        setCoolSuggestions,
        setNormalSuggestions
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SpacingGrid)