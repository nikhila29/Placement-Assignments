import React from 'react';
import './App.css';
import Accordion from './Accordion/Accordion';
import './Accordion/Accordion.css';
import {useState} from 'react';

function App() {

  const [isTrue,setIsTrue] = useState(false);
  const data=[
    {
      title:'What is React?',
      description:'React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building reusable UI components, especially for single page application. It is used for developing interactive view layer of web and mobile apps. It was created by Jordan Walke, a software engineer at Facebook. It was initially deployed on Facebooks News Feed section in 2011 and later used in its products like WhatsApp & Instagram.'
    },
    {
      title:'What is JSX?',
      description:'JSX stands for JavaScript XML. It is a React extension which allows writing JavaScript code that looks similar to HTML. It makes HTML file easy to understand. The JSX file makes the React application robust and boosts its performance. JSX provides you to write XML-like syntax in the same file where you write JavaScript code, and then preprocessor (i.e., transpilers like Babel) transform these expressions into actual JavaScript code. Just like XML/HTML, JSX tags have a tag name, attributes, and children.'
    },
    {
      title:'What do you understand by Virtual DOM?',
      description:'A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM. It is an intermediary step between the render function being called and the displaying of elements on the screen. It is similar to a node tree which lists the elements, their attributes, and content as objects and their properties. The render function creates a node tree of the React components and then updates this node tree in response to the mutations in the data model caused by various actions done by the user or by the system'
    }

  ]
  return (
    <div className="Accordion-main">

      <div className="buttons">
        <button onClick= {() => setIsTrue(true)}>Expand All</button>
        <button onClick={() => setIsTrue(false)}>Collapse All</button>
      </div>

      {data.map(acc => <Accordion title={acc.title} description={acc.description} isTrue={isTrue}></Accordion>)}

    </div>
  
  );
}

export default App;

