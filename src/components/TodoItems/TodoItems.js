import React from 'react';
import './TodoItems.css'

////////////////////////////////////////////////////////
const TodoItems = (props) =>
 {
    const {items , deleteItem} = props;
    let length = items.length;
    console.log(length);  
    const ListItem = length ? (items.map( item =>
        {
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span  className="action icon" onClick={ () => deleteItem(item.id)}>&times;</span>
            </div>
            )
        })) : ( <p>There is nothing to show </p>)
        /*
            the TodoItems renders the items it takes the state of App component
            as a prop to render the array of items and using map method loops in the array 
            of objects of the items and prints every object in the array
        */
///////////////////////////////////////////////////////
    return (
        <div className="ListItems">
            <span className="name title">Tasks</span>
            <span className="action title">Done</span>
            {ListItem}
        </div>
        );
};

export default TodoItems;