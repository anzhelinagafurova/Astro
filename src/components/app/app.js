import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPage from '../editPage/editPage';


const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<EditPage/>} />
            {/* <Route path="/chatapp/:id"
                render={({ match }) => {
                    const { id, groupId } = match.params;
                    return <ChatApp dialogId={groupId} id={id} />
                }}
            /> */}
        </Routes>
    )
}


export default App;
