import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItems/AddItems';


class App extends Component {
  state = {
      items : []
  }

  deleteItem = (id) =>{
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }
   /*
  deleteItem function takes the id of the item to delete using filter method
  which returns array of items that matchs the condition and updates the state of the App component 
  */
  addItem = (item) =>{
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState(items)
  }
 /*
  addItem function takes the item you want to add and creates a random id for each item you will create 
  to get your items easier later then gets the state , pushes your item in the state array and calls setState mathod
  to update the state 
  */
  render() {
    return (
      <div className="App contanier">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;