import React, {useEffect, useRef} from "react";
import {CircularProgress, IconButton, InputBase, makeStyles, Paper} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useSearchDomain from "../../hooks/useSearchDomain";
import {isDomainValid} from "../../repositories/DomainRepository";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setDomainData} from "../../redux/actions/domainActions";

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

    const domainInputRef = useRef()

    useEffect(() => {
        props.setDomainData({
            coolDomainsList: searchState.coolDomainsList,
            normalDomainsList: searchState.suggestedDomainsList,
            isDomainValid: searchState.isDomainValid,
            loading: searchState.loading,
            domain: searchState.domain,
            error: searchState.error,
            available: searchState.available,
        })
    }, [searchState])

    return (
        <Paper className={classes.root} variant={"outlined"}>
            <InputBase
                inputRef={domainInputRef}
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
                                    const input = domainInputRef.current.value
                                    if(!isDomainValid(input)) {

                                    }
                                    else {
                                        console.log("starting fetch")
                                        const searchResult = await searchDomain(input)
                                        searchResultChanged(searchResult)
                                    }

                                })();
                            }}
                        />
                }
            </IconButton>

        </Paper>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

