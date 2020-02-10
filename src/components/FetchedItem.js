import React, {useState} from 'react';
import arrow from '../img/Arrow.svg';

function FetchedItem(props){

    const [toggleClass,setToggleClass] = useState(false);

    const setToggle = () => {
        setToggleClass(!toggleClass);
    } 

    const tabTypes = props.item.tabTypes

    const mapTabTypes = tabTypes.map(tab => {
        if (tab === "PLAYER"){
            return (
                <li key={tab}>
                    PLAYER
                </li>
            )
        } else if (tab === "TEXT_GUITAR_TAB"){
            return (
                <li key={tab}>
                    GUITAR
                </li>
            )
        } else if (tab === "CHORDS"){
            return (
                <li key={tab}>
                    CHORDS
                </li>
            )
        } else if (tab === "TEXT_BASS_TAB"){
            return (
                <li key={tab}>
                    BASS
                </li>
            )
        } else{
            return (
                <li key={tab}>
                    OTHER TABS
                </li>
            )
        }
    });

    return (
        <div className={`item-box ${toggleClass ? 'item-box-active': ''}`}>
            <span className="title"> {props.item.title}</span>
            <span className="artist-name">{props.item.artist.name}</span>

            <img className={`${toggleClass ? 'arrow-rotate180': 'arrow'}`}  onClick={setToggle} src={arrow} alt="arrow" />
            <span className={`tabs-text ${toggleClass ? 'tabs-text-display': ''}`}>Check available tablatures</span>
            <div className={`tabs ${toggleClass ? 'tabs-display': ''}`}>
                
                <ul className="available-tabs" style={ {animation: toggleClass ? 'transitionOpacity 0.3s ease-in' : '' } }>
                    {mapTabTypes}
                </ul>
                
            </div>
            
        </div>
    )
}

export default FetchedItem