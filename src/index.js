import React from 'react';
import ReactDOM from 'react-dom';


const stateInfo = (
    stateID, 
    populationID, 
    capitalID, 
    state, 
    population, 
    capital, 
    state2, 
    population2, 
    capital2, 
    state3, 
    population3, 
    capital3, 
    state4, 
    population4, 
    capital4
) => {
      return (
          <table>
              <thead>
                  <tr>
                      <th>{stateID}</th>
                      <th>{populationID}</th>
                      <th>{capitalID}</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{state}</td>
                      <td>{population}</td>
                      <td>{capital}</td>
                  </tr>
                  <tr>
                      <td>{state2}</td>
                      <td>{population2}</td>
                      <td>{capital2}</td>
                  </tr>
                  <tr>
                      <td>{state3}</td>
                      <td>{population3}</td>
                      <td>{capital3}</td>
                  </tr>
                  <tr>
                      <td>{state4}</td>
                      <td>{population4}</td>
                      <td>{capital4}</td>
                  </tr>
              </tbody>
          </table>
      );
};

ReactDOM.render (
  stateInfo(
      'State   ',
      'Population',
      'Capital',
      'Idaho',
      ' ',
      'Boise',
      'Tennessee',
      '6.651 million',
      'Nashville',    
      'Wisconsin',
      '1.331 million',
      'Madison',
      'Maine',
      '5.779 million',
      'Agusta'
  ),
  document.getElementById('root')
);