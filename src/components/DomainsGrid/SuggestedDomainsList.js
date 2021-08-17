import React from "react";
import {FixedSizeList} from "react-window";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import AutoSizer from "react-virtualized-auto-sizer";
import BeenhereRoundedIcon from '@material-ui/icons/BeenhereRounded';
function SuggestedDomainsList(props) {

    const { list } = props

    const Row = ({ index, style }) => (
        <div style={style}>
            <ListItem button>
                <ListItemIcon>
                    <BeenhereRoundedIcon style={{ color: '#648dae' }}/>
                </ListItemIcon>
                <ListItemText primary={list[index]} secondary="Tap to see cost"/>

            </ListItem>
        </div>
    );

    return (
        <AutoSizer>
            {
                ({height, width}) => (
                    <FixedSizeList
                        height={height}
                        width={width}
                        itemSize={70}
                        itemCount={list.length}
                    >
                        {Row}
                    </FixedSizeList>
                )
            }
        </AutoSizer>

    )
}

export default SuggestedDomainsList