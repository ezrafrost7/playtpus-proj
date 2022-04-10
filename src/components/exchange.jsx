import React, { Component } from 'react';
import InputBox from './inputbox';

class Exchange extends Component {
    
    render() {

        const { cryptos } = this.props;

        return (
            <React.Fragment>
                {cryptos.map( crypto => (
                    <InputBox crypto={crypto} key={crypto.cryptoName} cryptoName={crypto.cryptoName} apr={crypto.apr} />
                ))}
            </React.Fragment>
        );
    }
}

export default Exchange;