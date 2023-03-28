import React from 'react'
import Home from './Home'
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import Header from './Headerandfooter/Header';
import Footer from './Headerandfooter/Footer';
import Profile from './Profile';
import PostByID from './Posts/PostByID';
import About from '../components/AboutUs/About';
import MainPage from './Main';

function Switcher(props) {
    const { user, loginWithRedirect, isAuthenticated } = useAuth0();
    const { isLoading, error } = useAuth0();
    console.log(user);
    
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
                (
                    <Routes>
                        <Route path="/" element={(
                            <Wrapper>
                                <Home user={user}/>
                            </Wrapper>
                        )} />
                        <Route path="/profile" element={(
                            <Wrapper>
                                <Profile user={user} />
                            </Wrapper>
                        )} />

                        <Route path="/about" element={(
                            <Wrapper>
                                <About />
                            </Wrapper>
                        )} />
                        <Route path="/postinfo/:id" element={(
                            <Wrapper>
                                <PostByID />
                            </Wrapper>
                        )} />
                    </Routes>
                )}
        </main>
    )
}

export default Switcher