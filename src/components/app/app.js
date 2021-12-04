import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPage from '../editPage/editPage';
import EnterPage from '../enterPage/enterPage';
import DialogsPage from '../dialogs/dialogsPage';
import RegistrationPage from '../registrationPage/registrationPage';
import TestSocioPage from '../testSocioPage/testSocioPage';
import TestSocioResultPage from '../testSocioResultPage/testSocioResultPage';
import Test16PersPage from '../test16PersPage/test16PersPage';

const App = () => {
    return (
        <Routes>
            {/* <Route exact path="/" element={<EnterPage />} /> */}
            <Route exact path="/" element={<DialogsPage />} />
            <Route exact path="/testSocioResultPage" element={<TestSocioResultPage />} />
            <Route exact path="/testSocioPage" element={<TestSocioPage page="Test page" />} />
            <Route exact path="/test16PersPage" element={<Test16PersPage />} />
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
