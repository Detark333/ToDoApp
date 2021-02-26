import React, {useEffect, useState} from "react";
import Item from "../Item/Item";
import {ToDoApi} from "../api/api";
import CircularProgress from '@material-ui/core/CircularProgress';

const ListItems = (props) => {
    const [toDoList, setToDoList] = useState(null)
    useEffect(() => {
        ToDoApi.list()
            .then(res => setToDoList(res))
    }, [props.check])
    return <>
        {toDoList === null ?
            <CircularProgress/> :
            toDoList.map((item) => {
                return <Item key={item.id}
                             id={item.id}
                             checked={item.complete}
                             task={item.task}
                             onDelete={() => {
                                 ToDoApi.delete(item.id).then(res => {
                                     console.log(res);
                                     ToDoApi.list().then(res => {
                                         console.log(res);
                                         setToDoList(res)
                                     })
                                 })
                             }
                             }
                />
            })
        }
    </>

}

export default ListItems;