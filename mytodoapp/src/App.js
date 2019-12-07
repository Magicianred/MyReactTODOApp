import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      data: '',
      list: [],
      id: 0
      
    }
    this.handleChange.bind();
    this.handleKeyDown.bind(); 
  }
  handleChange (data) {
    this.setState ({data: data.target.value});  
  };
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      event.stopPropagation();
    }
  };
  
  render(){
    const todo = this.state.data;
    const newList= this.state.list ;
    const id = this.state.id;
    const removeItem=(index)=> {
      const list = this.state.list;
      list.splice(index, 1);
      this.setState({ list });
    };
    const handleClick = (item) => {
      newList.push(item);        
      this.setState ({
        results:{
          list:  newList.map(e=>[e,Math.random()]),
          data: '',
          id:id+1,
        }
      });     
      console.log(this.state.results);
    };
    const showTable =  newList.map(val=> <li> <h3> {val} {<button 
      style={{color:'red'}}
      onClick={removeItem}      
      > 
      <span role="img"> Remove  ✔️ </span>  
      </button> }</h3> </li>);  
      
      return (
        <div className="App">
        <div className="App-header">
        <p className="Input-todo">
        {todo}
        </p> 
        <div className="Input-Form" > 
        <form >
        <input 
    
        onChange = {e=> this.handleChange(e)}
        value = {todo}
        onKeyDown={this.handleKeyDown}
        >
        </input>
        <hr></hr>
        </form>
        </div>
        <div> 
        <text> </text>
        <button 
        className = 'Save-Button'
        onClick = {()=>handleClick(this.state.data)}
        > 
        Save
        </button>
        <text> </text>   
        <button 
        className = 'Delete-Button'
        onClick = {e=>this.handleChange(e)}
        > 
        Clear
        </button>
        </div>
        <ul className="Input-box" >
        {showTable}
        </ul> 
       </div>
        </div>      
        );
      }
    };
    
    export default App;
    