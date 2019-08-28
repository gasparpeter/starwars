import React, {Component} from 'react';
import ButtonList from "./ButtonList";

class App extends Component {

    state = {
        characters : [
            {
                name: 'Darth Vader',
                image: 'https://library.kissclipart.com/20181002/iiq/kissclipart-lego-star-wars-minifigure-darth-vader-white-hea-3bfcd40448cc3e27.jpg'
            },
            {
                name: 'Kylo Ren',
                image: 'https://library.kissclipart.com/20180902/xgw/kissclipart-kylo-ren-lego-png-clipart-lego-star-wars-the-forc-e8a2dd08e5ceb638.jpg'
            },
            {
                name: 'Yoda',
                image: 'https://i.pinimg.com/originals/ba/e6/44/bae644068634f242cc406c4a0c30864d.png'
            },
            {
                name: 'Rey',
                image: 'https://psmedia.playstation.com/is/image/psmedia/lego-star-wars-tfa-two-column-01-ps4-eu-02feb16?$TwoColumn_Image$'
            }

        ]
    }

    render() {
        return(
            <div>
                <ButtonList characters={this.state.characters}/>
            </div>
        )
    }

}

export default App;