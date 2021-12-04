import React, { useContext } from 'react'
import { ChatEngineContext, Button } from 'react-chat-engine'
import SettingsBlock from '../Poll/SettingsBlock'
import {Card, Form, Row, Col} from 'react-bootstrap';


const ListsSettings = () => {
    const { chats, activeChat } = useContext(ChatEngineContext)  
    const chat = chats && chats[activeChat] 

    const [todos, setTodos] = React.useState([
        {
          text: "This is a list item",
          isDone: false
        }
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    if (!chat) return <div />

    function Todo({ todo, index, markTodo, removeTodo }) {
        return (
          <div
            className="todo"
          >
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
              <Button  onClick={() => markTodo(index)} value="✓" />
              <Button  onClick={() => removeTodo(index)} value="X" />
            </div>
          </div>
        );
      }
      
      function FormTodo({ addTodo }) {
        const [value, setValue] = React.useState("");
      
        const handleSubmit = e => {
          e.preventDefault();
          if (!value) return;
          addTodo(value);
          setValue("");
        };
      
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Label>The List</Form.Label>
             <Form.Group>
                 <Form.Control style={{ height: '10px'}}type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new item" />
                 <Button type="submit" value="Add Item" /> 
             </Form.Group>
          </Form>
        );
      }

    return (
        <div style={{ borderTop: '2px solid #f0f0f0' }} className='ce-photo-section'>
            <SettingsBlock
                label='Lists'
                className='ce-section-title-container ce-photo-title-container'
            >

<div className="container">
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

            </SettingsBlock>
        </div>
    )
}

export default ListsSettings