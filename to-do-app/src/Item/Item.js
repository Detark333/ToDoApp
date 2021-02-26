import React from "react";
import item from './Item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const Item = (props) => {
    return <div className={item.mainDiv}>
        <div className={item.text}>
        <Checkbox
            defaultChecked
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Typography>Task</Typography>
        </div>
        <ClearIcon onClick={props.onDelete} className={item.clear}/>
    </div>
}

export default Item