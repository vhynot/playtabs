import React, {useContext} from 'react';
import magnifier from "../img/Magnifier.svg";
import {SearchContext} from "./searchContext";

function SearchBar(){
    const { tab,
            setTab,
            searchItem,
            setSearchItem,
            handleSubmitSearch} = useContext(SearchContext);

    const handleSearch = e => {
        setSearchItem(e.target.value);
    };

    const handleSelect = e => {
        setTab(e.target.value);
    };


    return (
        <div className="search-bar-wrapper">
            <form className="search-form" onSubmit={handleSubmitSearch}>
                <input  className="search-form__input"
                        type="text"                                            
                        autoComplete="off"
                        onChange={handleSearch}
                        value={searchItem}
                        placeholder="Search" >
                </input>
                <div className="search-form__right-side">
                    <select                                                        
                        className="search-form__select"
                        value={tab}
                        onChange={handleSelect}>
                        {/* <option value="ALL_CHORDS">All Tabs</option> */}
                        <option className="search-form__select-tab" value="PLAYER">Player</option>
                        <option className="search-form__select-tab" value="TEXT_GUITAR_TAB">Guitar</option>
                        <option className="search-form__select-tab" value="CHORDS">Chords</option>
                        <option className="search-form__select-tab" value="TEXT_BASS_TAB">Bass</option>                 
                    </select>
                    <button className="search-form__btn">
                        <img className="search-form__magnifier" src={magnifier} alt="magnifier"/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar