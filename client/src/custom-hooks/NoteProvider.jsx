import React, { useContext, useState } from 'react';

const NoteContext = React.createContext();
const SetNoteContext = React.createContext();

export const useNote = () => {
    return useContext(NoteContext);
}

export const useChangeNote = () => {
    return useContext(SetNoteContext);
}

export const NoteProvider = ( { children }) => {
    const [Note, setNote] = useState({});

    // object
    // https://stackoverflow.com/a/61242889
    const changeNote = (name, value) => {
        // const name = name;
        // const value = value;
        setNote((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <NoteContext.Provider value={ Note }>
            <SetNoteContext.Provider value={ (name, value) =>  {changeNote(name, value) } }>
            { children }
            </SetNoteContext.Provider>
        </NoteContext.Provider>
    );

};


