import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
    // Retrieve the current user and set the current user
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    // Function to handle user sign-out
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            console.log(err);
        }
    };

    // Define the "Add post" icon
    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className='far fa-plus-square'></i>Add post
        </NavLink>
    );

    // Define icons for logged-in users
    const loggedInIcons =
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to='/selected'
            >
                <i className='fa-solid fa-square-check'></i>Selected posts
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to='/'
                onClick={handleSignOut}
            >
                <i className='fas fa-sign-out-alt'></i>Sign out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to={`/profiles/${currentUser?.profile_id}`}
            >
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </>

    // Define icons for logged-out users
    const loggedOutIcons = <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin"
        >
            <i className='fas fa-sign-in alt'></i>Sign in</NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signup"
        >
            <i className='fas fa-user-plus'></i>Sign up</NavLink>
    </>
    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.Logo} href="#home">
                        Celiac's Choice
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >
                            <i className='fas fa-home'></i>Home</NavLink>
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/about"
                        >
                            <i className='fa-solid fa-circle-info'></i>About</NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
