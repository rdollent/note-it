import React, { useContext, useState } from 'react';

const ListContext = React.createContext();
const SetListContext = React.createContext();

export const useList = () => {
    return useContext(ListContext);
}

export const useChangeList = () => {
    return useContext(SetListContext);
}

export const ListProvider = ( { children }) => {
    const [list, setList] = useState('initial state');

    const changeList = (data) => { setList(data) };

    return (
        <ListContext.Provider value={ list }>
            <SetListContext.Provider value={ (data) =>  {changeList(data) } }>
            { children }
            </SetListContext.Provider>
        </ListContext.Provider>
    );

};


