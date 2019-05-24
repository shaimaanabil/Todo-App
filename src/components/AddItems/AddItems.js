import React, { Component } from 'react';
import './AddItems.css'

///////////////////////////////////////////////////////
class AddItems extends Component {
    state = {
        name : ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    /*
        changeHandler takes event object after typing in the input text it  
        updates the state of AddItems component with the target.id which is name and the value 
        of the input  
    */

    submitHandler = (e) => {
        e.preventDefault();
        if(e.target.name.value === ''){
            return false
        }else{
            this.props.addItem(this.state)   
            this.setState({name:""}) 
        }

     /*
        submitHandler prevents adding an empty input and uses the addItem 
        which is in App component and passes it as a prop takes the current state to addItem 
        and updates the state to make it empty again to clear the input text in jsx
     */
        
    }
    render() {
        return (
            <div>
                <form autocomplete="off" onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter your task" id="name" onChange={this.changeHandler} value={this.state.name}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}

export default AddItems;