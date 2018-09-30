import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    const numObj =
[
              {id: 1, firstName:"steve", lastName:"jamieson"},
              {id: 2, firstName :"shena",  lastName:"walsh"},
              {id: 3, firstName: "nora", lastName:"jamieson"}
    ];

  const numObj2 = [
            {id: 1, thumnail:"http://steve"},
            {id: 2, thumnail:"http://shena"},
            {id: 3, thumnail:"http://nora"}

  ];

  const numObj3 = [
            {id: 1, name:"steve"},
            {id: 2, name:"shena"},
            {id: 3, name:"nora"}

  ];

let result = [{}];
for(var i in numObj ){
  for(var j in numObj2){
    if(numObj[i].id === numObj2[j].id){
      result.push(numObj[i].lastName);
      result.push(numObj2[j].thumnail);
    }
  }
}
// const result = numObj.employees.map(word =>
//   numObj2.details.map(word2 => word.id === word2.id));


// const result = numObj2.details.filter(word =>
//   numObj.employees.map(id => id.id === word.id));


    console.log(numObj);
    console.log(numObj2);
    console.log(numObj3);
    console.log(result);
    // const numbers = [1, 2, 3, 4, 5];
    // const numbers2 = [6, 7, 8, 9, 10];


    const listItems2 = numObj.map((number) =>
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
