import React from 'react'
import Home from './Home'
import MainPage from './Main'
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import Header from './Headerandfooter/Header';
import Footer from './Headerandfooter/Footer';
import Profile from './Profile';

function Switcher(props) {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const {isLoading, error } = useAuth0();
    

    const Wrapper = ({ children }) => (
        <>
            <Header className={props.scrollPosition === 0 ? '' : 'scrolledinpage'} />
            {children}
            <Footer />
        </>
    );
    
    return (
        <main>
            {!isAuthenticated && !isLoading && !error ? <MainPage loginWithRedirect={loginWithRedirect} /> :
                (<Routes>
                    <Route path="/" element={(
                        <Wrapper>
                            <Home />
                        </Wrapper>
                    )} />
                    <Route path="/profile" element={(
                        <Wrapper>
                            <Profile />
                        </Wrapper>
                    )} />
                </Routes>
                )
            }
        </main>
    )
}

export default Switcher