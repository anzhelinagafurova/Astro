import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPage from '../editPage/editPage';
import EnterPage from '../enterPage/enterPage';
import DialogsPage from '../dialogs/dialogsPage';
import RegistrationPage from '../registrationPage/registrationPage';
import TestSocioPage from '../testSocioPage/testSocioPage';
import Test16PersPage from '../test16PersPage/test16PersPage';
import Dialog from '../dialogs/dialog';


const App = () => {

    return (

        <Routes>
            <Route exact path="/" element={<EnterPage />} />
            <Route exact path="/dialogsPage" element={<DialogsPage />} />
            <Route path="/dialog" element={<Dialog/>} />
            <Route path="/testSocioPage" element={<TestSocioPage />} />
            <Route path="/test16PersPage" element={<Test16PersPage />} />
            <Route path="/registrationPage" element={<RegistrationPage />} />
            <Route path="/editPage" element={<EditPage />} />
            {/* <Route path="/dialog/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <Dialog id={id} />
                }}
            /> */}
        </Routes>

        
    )
}


export default App;
