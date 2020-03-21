import React, {createContext, useState} from "react";
const SearchContext = createContext();

function SearchContextProvider(props){
    const [tab, setTab] = useState("PLAYER");
    const [searchItem, setSearchItem] = useState('');
    const [executeSearch, setExecuteSearch] = useState(false);

    const handleSubmitSearch = e => {
        e.preventDefault();
        setExecuteSearch(true);
    }

    return (
        <SearchContext.Provider value={{tab,
                                        setTab,
                                        searchItem,
                                        setSearchItem,
                                        handleSubmitSearch,
                                        executeSearch,
                                        setExecuteSearch}
                                        }>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContextProvider, SearchContext};