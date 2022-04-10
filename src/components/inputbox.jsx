import React, { Component } from 'react';

class InputBox extends Component {

    render() {

        return (
            <div className="crypto">
                <label><h3>{this.props.cryptoName}</h3></label>
                <input className={this.props.cryptoName} id={this.props.cryptoName}></input>
                <p>APR: {(this.props.apr)*100}%</p>
            </div>
        )
    }

}

export default InputBox