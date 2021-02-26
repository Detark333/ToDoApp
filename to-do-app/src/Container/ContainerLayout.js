import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import container from './Container.module.css';
import ListItems from "../ListItems/ListItem";
import {ToDoApi} from "../api/api";

const onSubmitHandler = (task) => {
    if (task !== '') {
        ToDoApi
            .add(task, false)
            .then(res => console.log(res))
    }
}

const ContainerLayout = () => {
    const [task, setTask] = useState('')
    const [update, setUpd] = useState(true)
    return <>
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmitHandler(task)
            setUpd(!update)
        }} className={container.inputDiv}>
            <TextField
                id="outlined-required"
                label="Task"
                defaultValue={task}
                variant="outlined"
                className={container.input}
                onChange={(e) => {
                    setTask(e.target.value)
                }}
            />
            <Button variant="outlined" size="large" className={container.button} onClick={() => {
                onSubmitHandler(task)
                setUpd(!update)
            }}>ADD</Button>
        </form>
        <ListItems check={update}/>
    </>
}

export default ContainerLayout;