import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchBar from "../search/SearchBar";
import {FixedSizeList} from "react-window";
import SuggestedDomainsList from "./SuggestedDomainsList";
import CoolDomainsList from "./CoolDomainsList";
import {bindActionCreators} from "redux";
import {setDomainData} from "../../redux/actions/domainActions";
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

function DomainsGrid(props) {


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
        <div>
            {
                props.domain.domain === "" || props.domain.domain == null || props.domain.loading ?
                    null
                    :
                    (
                        props.domain.error == null?
                            (
                                props.domain.isDomainValid ?
                                    <div>Domain is {props.domain.available? "available" : "not available"}</div>
                                    :
                                    <div>Domain is not valid</div>
                            )
                            :
                            (
                                <div>Some Error came</div>
                            )

                    )

            }
        </div>


    
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {[0, 1].map((value) => (

            <Grid key={value} item>
            {value===0?<ListItemText primary="Suggested Domains" />:<ListItemText primary="Cool Domains" />}
            

              <Paper className={classes.paper} >
                {
                  value === 0?
                      <SuggestedDomainsList list={props.domain.normalDomainsList}/>
                      :
                      <CoolDomainsList  list={props.domain.coolDomainsList}/>
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
    const {domain} = state
    return {domain}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        //all actions come here
        setDomainData
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DomainsGrid)