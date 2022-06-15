import React, { PureComponent } from 'react'

class Todo extends PureComponent {
   
    state={
        todos:[],
        count:0
    }


    generateTodo(){
        var time=Date.now();
        return {title: `Todo : ${time}`,
                id:time,
    };
}

    addTodo=()=>{
        const todo=this.generateTodo();
        this.setState({todos:[...this.state.todos,todo]});
        this.setState((state)=>({count:state.todos.length}))
    }
    
    render() {

       

        return (
            <div>
                <button onClick={this.addTodo}>Add todo</button>
                <div>Count: {this.state.count}</div>
                <ol>
                {this.state.todos.map((item)=>(
                   <li key={item.id}>{item.title}</li>
                ))}
                </ol>
            </div>
        )
    }
}

export default Todo