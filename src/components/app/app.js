import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPage from '../editPage/editPage';
import EnterPage from '../enterPage/enterPage';
import RegistrationPage from '../registrationPage/registrationPage';


const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<EnterPage />} />
            <Route exact path="/registrationPage" element={<RegistrationPage />} />
            <Route exact path="/editPage" element={<EditPage />} />
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
