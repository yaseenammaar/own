import React from "react";
import {CircularProgress, IconButton, InputBase, makeStyles, Paper} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useSearchDomain from "../hooks/useSearchDomain";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        marginBottom: 10,
        padding: '2px 10px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: 25,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

function SearchBar(props){
    const classes = useStyles();
    const {searchState, searchDomain} = useSearchDomain()
    const {
        searchResultChanged
    } = props

    return (
        <Paper className={classes.root} variant={"outlined"}>
            <InputBase
                className={classes.input}
                placeholder="Search Domains"
                inputProps={{ 'aria-label': 'search domains' }}

            />
            <IconButton className={classes.iconButton} aria-label="search">
                {
                    searchState.loading ?
                        <CircularProgress  size={20}/>
                        :
                        <SearchIcon
                            onClick={() => {
                                (async () => {
                                    await searchDomain("")
                                    searchResultChanged(searchState)
                                })();
                            }}
                        />
                }
            </IconButton>

        </Paper>
    )
}

export default SearchBar