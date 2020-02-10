import React, {useState} from 'react';
import Search from './Search';
import FetchedItem from './FetchedItem';
import logo from '../img/Frame-1.svg';

function Home(){
const [songs, setSongs] = useState([]);                                // Controls fetched data
const [isLoading, setIsLoading] = useState(false);                    // Controls fetching data time
const [tabs, setTabs] = useState("PLAYER");                          // Controls changes on 'Select' tag
const [err, setErr] = useState(null);                               // Controls error of empty input

    const fetchItems = async (searchItem) => {
        setErr(null);
        setIsLoading(true);
        setSongs([]);

        const data = await fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${searchItem}`);
        const items = await data.json();

        if (searchItem === ""){
            setErr("noResult");
        } else if (searchItem !== ""){
            setErr("notEmptyInput");
        } else {
            setErr(null);
        }

        setSongs(items);
        setIsLoading(false);
    }

    const mapSongs = songs.filter( song => song.tabTypes.includes(tabs))
                          .map( song => {
                              
                            return (
                                <FetchedItem key={song.id}
                                             item={song}/>
                            )
                          }) 

    const handleSelectValue = tab => { setTabs(tab) }

    return(
        <div className="home-div">
            <div className="logo-title">
                <img className="logo" src={logo} alt="logo"/>
                <h1>Play Tabs</h1>
            </div>
            <div className="header">
                <span className="header-text-1">Discover</span>
                <span className="header-text-2"> new </span>
                <span className="header-text-3">tablatures</span>
                <span className="header-text-4">Type artist or song title and select desired tabs</span>
            </div>
           
            <Search  search={fetchItems}
                     pickTab={handleSelectValue}/>

            <div className="control-warning">
                { isLoading ? <span className="warning">loading...</span> : ""}
                {err === "noResult"  ? <span className="warning">Empty input</span> : "" }
                {(songs.length > 0 && mapSongs.length === 0) || (err === "notEmptyInput" && songs.length === 0)  ? <span className="warning">No results for declared value</span> : "" }
                { mapSongs.length > 0 ? <span className="warning"> Search results: {mapSongs.length}</span>: ""}
            </div>

            <div className="item">
                {mapSongs}
            </div>
        </div>
    )
}

export default Home

