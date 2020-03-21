import React, {useState} from 'react';
import arrow from '../img/Arrow.svg';

function IndividualItem({item}){
    const {tabTypes, title, artist} = item;
    const [toggleClass, setToggleClass] = useState(false);
    
    const setToggle = () => {
        setToggleClass(!toggleClass);
    };

    const mapTabTypes = tabTypes.map(tab => {
        switch(tab){
            case "PLAYER":
                return (
                    <li className="item__individual-tab" key={tab}>
                        PLAYER
                    </li>
                )
            case "TEXT_GUITAR_TAB":
                return (
                    <li className="item__individual-tab" key={tab}>
                        GUITAR
                    </li>
                )
            case "CHORDS":
                return (
                    <li className="item__individual-tab" key={tab}>
                        CHORDS
                    </li>
                )
            case "TEXT_BASS_TAB":
                return (
                    <li className="item__individual-tab" key={tab}>
                        BASS
                    </li>
                )
            default:
                return (
                    <li className="item__individual-tab" key={tab}>
                        OTHER TABS
                    </li>
                )
        };
    });

    return (
        <div className={`item ${toggleClass ? 'item--active': ''}`}>
            <span className="item__title"> {title}</span>
            <span className="item__artist">{artist.name}</span>
            <img className={`${toggleClass ? 'item__arrow-180': 'item__arrow'}`} 
                 onClick={setToggle} 
                 src={arrow}
                 alt="arrow" />
            <span className={`item__info ${toggleClass ? 'item__info--display': ''}`}>Check available tablatures</span>
            <div className={`item__available-tabs ${toggleClass ? 'item__available-tabs--display': ''}`}>
                <ul className={`item__list-of-tabs ${toggleClass ? 'item__list-of-tabs--display': ''}`}>  
                    {mapTabTypes}
                </ul>
            </div>
        </div>
    )
};

export default IndividualItem;