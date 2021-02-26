import React, {useState} from "react";
import item from './Item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import {Typography} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Input from '@material-ui/core/Input';
import {ToDoApi} from "../api/api";

const Item = (props) => {
    const [task, setTask] = useState(props.task)
    const [checked, setChecked] = useState(props.checked)
    const [change, setChange] = useState(false)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        ToDoApi.update(props.id, task, checked).then(res => console.log(res))
        setChange(!change)
    }

    return <div className={item.mainDiv}>
        <div className={item.text}>
            <Checkbox
                checked={checked}
                inputProps={{'aria-label': 'secondary checkbox'}}
                onChange={() => {
                    ToDoApi.update(props.id, task, !checked).then(res => console.log(res))
                    setChecked(!checked)
                }}
            />
            {change ?
                <form onSubmit={onSubmitHandler}>
                    <Input defaultValue={task}
                           inputProps={{'aria-label': 'description'}}
                            onChange={(e) => {
                                if(e.target.value !== '') {
                                    setTask(e.target.value)
                                }
                            }}
                           className={item.input}
                    />
                </form> :
                <Typography onClick={() => setChange(!change)}>{task}</Typography>
            }

        </div>
        <ClearIcon onClick={props.onDelete} className={item.clear}/>
    </div>
}

export default Item