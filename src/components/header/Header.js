import React from 'react'
import './Header.scss';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <header className="header">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <img className="header__logo" src="tinder.svg" alt="tinder logo" />
            <IconButton>
                <ForumIcon />
            </IconButton>
        </header>
    )
}

export default Header
