import React, {Component} from 'react';
import ButtonList from "./ButtonList";
import Character from './Character';

class App extends Component {

    state = {
        characters : [
            {
                name: 'Darth Vader',
                image: 'https://www.filmandtvnow.com/wp-content/uploads/2014/09/Vader_Minifig.png',
                selected: false
            },
            {
                name: 'Kylo Ren',
                image: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/30bafd0a662e4ce3bdf27cff7e0bf3c1_Large.png',
                selected: false
            },
            {
                name: 'Yoda',
                image: 'http://is4.mzstatic.com/image/thumb/Purple/v4/11/ef/22/11ef22e9-aa4c-3fef-5a01-76ee5556ac0c/source/512x512bb.png',
                selected: false
            },
            {
                name: 'Rey',
                image: 'https://psmedia.playstation.com/is/image/psmedia/lego-star-wars-tfa-two-column-01-ps4-eu-02feb16?$TwoColumn_Image$',
                selected: false
            }

        ]
    };

    onClickHandle = (index) => _ => {
        this.setState({
            characters: this.state.characters.map( (char, charIndex) =>
                ( ( charIndex === index) ? ({...char, selected: true}) : ({...char, selected: false}) )
            )
        })
    };

    render() {
        return(
            <div>
                <ButtonList onClickFunc={this.onClickHandle} characters={this.state.characters}/>
                <Character selectedChar={ this.state.characters.find(char => char.selected) } />
            </div>
        )
    }

}

export default App;