import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import ListItemText from "@material-ui/core/ListItemText";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function CoolDomainsList(props) {
    const { list } = props

    const Row = ({ index, style }) => (
        <div style={style}>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
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

export default CoolDomainsList