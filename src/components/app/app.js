import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPage from '../editPage/editPage';
import EnterPage from '../enterPage/enterPage';
import DialogsPage from '../dialogs/dialogsPage';
import RegistrationPage from '../registrationPage/registrationPage';
import TestSocioPage from '../testSocioPage/testSocioPage';
import TestSocioResultPage from '../testSocioResultPage/testSocioResultPage';
import Test16PersPage from '../test16PersPage/test16PersPage';
import SearchPage from '../searchPage/searchPage';
import Dialog from '../dialogs/dialog';


const App = () => {

    return (

        <Routes>
            <Route exact path="/" element={<EnterPage />} />
            <Route exact path="/dialogsPage" element={<DialogsPage />} />
            <Route exact path="/dialog" element={<Dialog />} />
            <Route exact path="/testSocioResultPage" element={<TestSocioResultPage />} />
            <Route exact path="/testSocioPage" element={<TestSocioPage page="Test page" />} />
            <Route exact path="/test16PersPage" element={<Test16PersPage />} />
            <Route exact path="/registrationPage" element={<RegistrationPage />} />
            <Route exact path="/searchPage" element={<SearchPage />} />
            <Route exact path="/editPage" element={<EditPage />} />
            {/* <Route path="/chatapp/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <Dialog id={id} />
                }}
            /> */}
        </Routes>


    )
}


export default App;
