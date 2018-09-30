import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    const numObj =
    {
      "employees":[
              {id: 1, firstName:"John", lastName:"Doe"},
              {id: 2, firstName :"Anna",  lastName:"Smith"},
              {id: 3, firstName: "Peter", lastName:"Jones"}
    ]
  }

  const numObj2 =
  {
    "details":[
            {id: 1, thumnail:"http://steve"},
            {id: 2, thumnail:"http://steve"},
            {id: 3, thumnail:"http://steve"}

  ]
}

const result = numObj2.details.filter(word => word.id === 1);


    console.log(numObj);
    console.log(numObj2);
    console.log(result);
    // const numbers = [1, 2, 3, 4, 5];
    // const numbers2 = [6, 7, 8, 9, 10];


    const listItems2 = numObj.employees.map((number) =>
      <li>{number.firstname}</li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">

        <ul>{listItems2}</ul>
        </p>
      </div>
    );
  }
}

export default App;
