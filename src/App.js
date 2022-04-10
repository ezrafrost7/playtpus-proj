import './App.css';
import React, { Component } from 'react';
import Exchange from './components/exchange';

class App extends Component {

  state = {
    cryptos: [
        {cryptoName: "Ethereum", apr: .025},
        {cryptoName: "Avalanche", apr: .03},
        {cryptoName: "Helium", apr: .011}
    ]
}

  render() {

    const cryptos = this.state.cryptos

    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Exchange 
              cryptos = {cryptos}
            />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;