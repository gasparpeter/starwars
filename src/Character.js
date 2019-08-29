import React, {Component} from 'react';


class Character extends Component {

state = {
    name: 'Peti',
    image: 'https://jaki-jezyk-programowania.pl/img/javascript.png'
};

    render() {
        return(
            <div>
                {this.state.name && <div>
                    <h2>{this.state.name}</h2>
                    <img src={this.state.image} alt='Char'/>
                </div>}
            </div>
        )
    }

}

export default Character;