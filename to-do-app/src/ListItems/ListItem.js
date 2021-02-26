import React, {useEffect, useMemo, useState} from "react";
import Item from "../Item/Item";
import {ToDoApi} from "../api/api";
import CircularProgress from '@material-ui/core/CircularProgress';

const ListItems = () => {
    const [toDoList, setToDoList] = useState(null)
    useEffect(() => {
        ToDoApi.list().then(res => {console.log(res); setToDoList(res)})
        // ToDoApi.add("123", true).then(res => console.log(res))
        // ToDoApi.list().then(res => console.log(res))
        // ToDoApi.delete(1).then(res => console.log(res))
        // ToDoApi.list().then(res => console.log(res))
        // ToDoApi.update(1, "1111", false).then(res => console.log(res))
        // ToDoApi.list().then(res => console.log(res))
    },[])
    return <>
        {toDoList === null ? <CircularProgress /> :
        toDoList.map((item) =>{
            return <Item key={item.id}
                         onDelete={()=>{
                             ToDoApi.delete(item.id).then(res => {
                                 console.log(res);
                                 ToDoApi.list().then(res => {console.log(res); setToDoList(res)})
                             })
                         }
            }/>
        })
        }
    </>

}

export default ListItems;