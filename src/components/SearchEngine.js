import React, {useState, useEffect, useContext} from 'react';
import SearchBar from './SearchBar';
import IndividualItem from './IndividualItem';
import logo from '../img/Frame-1.svg';
import {SearchContext} from "./searchContext";
import background from "../img/music.jpg"

function SearchEngine(){
    const {tab, searchItem, setSearchItem, executeSearch, setExecuteSearch} = useContext(SearchContext);
    const [bgLoaded, setBgLoaded] = useState(false);
    const [songs, setSongs] = useState([]);                                // Controls fetched data
    const [isLoading, setIsLoading] = useState(false);                    // Controls fetching data time
    const [err, setErr] = useState(null);                               // Controls error of empty input
    
    useEffect(() => {
        const img = new Image();
        img.src = background;
        if (!bgLoaded){
            img.onload = () => {
                setBgLoaded(true)
            }
        }
    }, [bgLoaded])

    useEffect(() => {
        if(executeSearch === true){
            const fetchItems = async searchValue => {
                setErr(null);
                setIsLoading(true);
                setSongs([]);
                const data = await fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${searchValue}`);
                const items = await data.json();
                if (searchItem === ""){
                    setErr("noResult");
                } else {
                    setErr("notEmptyInput");
                };
                setSongs(items);
                setSearchItem('');
                setIsLoading(false);
                setExecuteSearch(false);
            };
            fetchItems(searchItem);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [executeSearch]);

    const mapSongs = songs.filter( song => song.tabTypes.includes(tab))
                          .map( song => {
                            return (
                                <IndividualItem key={song.id}
                                                item={song}
                                                bgLoaded={bgLoaded}/>
                            )
                          });

    return(
        <div className={`app ${bgLoaded ? "app--background-appear" : ""}`}>
            <div className={`logo ${bgLoaded ? "logo--appear" : ""}`}>
                <img className="logo__img" src={logo} alt="logo"/>
                <h1 className="logo__text">Play Tabs</h1>
            </div>
            <div className="title">
                <span className={`title__text-1  ${bgLoaded ? "title__text-1--mod-1" : ""}`}>Discover</span>
                <span className={`title__text-1  ${bgLoaded ? "title__text-1--mod-2" : ""}`}> new </span>
                <span className={`title__text-1  ${bgLoaded ? "title__text-1--mod-3" : ""}`}>tablatures</span>
                <div className={`title__text-2  ${bgLoaded ? "title__text-2--mod-4" : ""}`}>Type artist or song title and select desired tabs</div>
            </div>
            <SearchBar bgLoaded={bgLoaded}/>
            <div className="warning">
                { isLoading && <span className="warning__control">Loading...</span>}
                {err === "noResult"  && <span className="warning__control">Empty input</span>}
                {((songs.length > 0 && mapSongs.length === 0) || (err === "notEmptyInput" && songs.length === 0))  && 
                <span className="warning__control">No results for declared value</span>}
                { mapSongs.length > 0 && <span className="warning__control"> Search results: {mapSongs.length}</span>}
            </div>
            <div className="item-wrapper">
            {mapSongs}
            </div>
        </div>
    )
}

export default SearchEngine;

