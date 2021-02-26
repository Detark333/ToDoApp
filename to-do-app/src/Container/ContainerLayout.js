import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import container from './Container.module.css';
import ListItems from "../ListItems/ListItem";

const ContainerLayout = () => {
    return <>
            <div className={container.inputDiv}>
                <TextField
                    id="outlined-required"
                    label="Task"
                    defaultValue=""
                    variant="outlined"
                    className={container.input}
                />
                <Button variant="outlined" size="large" className={container.button} >ADD</Button>
            </div>
            <ListItems/>
        </>
}

export default ContainerLayout;