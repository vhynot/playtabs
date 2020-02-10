import React, {useState} from 'react';
import magnifier from "../img/Magnifier.svg";

function Search({search,pickTab}){

    const [searchItem, setSearchItem] = useState('');
    const [tab,setTab] = useState("PLAYER")

    const handleSearch = e => {
        setSearchItem(e.target.value);
    }

    const handleSubmitSearch = e => {
        e.preventDefault();
        search(searchItem);
        pickTab(tab);
        setSearchItem('');
    }

    const handleSelect = e => {
        setTab(e.target.value);
    }


    return (
        <div className="search-box">
            <form className="search-form" onSubmit={handleSubmitSearch}>
                <input type="text" autoComplete="off" onChange={handleSearch} className="search-left" value={searchItem} placeholder="Search" ></input>
                <div className="search-right">
                <select 
                    value={tab}
                    onChange={handleSelect}
                    id="select-tab">
                    {/* <option value="ALL_CHORDS">All Tabs</option> */}
                    <option value="PLAYER">Player</option>
                    <option value="TEXT_GUITAR_TAB">Guitar</option>
                    <option value="CHORDS">Chords</option>
                    <option value="TEXT_BASS_TAB">Bass</option>
                </select>
                <button><img className="magnifier" src={magnifier} alt="magnifier"/></button>
                </div>
            </form>
        </div>
    )
}

export default Search