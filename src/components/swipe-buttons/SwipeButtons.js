import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import './SwipeButtons.scss';

function SwipeButtons() {
    return (
        <section className="swipe-buttons">
            <IconButton className="swipe__replay swipe__btn">
                <ReplayIcon />
            </IconButton>
            <IconButton className="swipe__reject swipe__btn">
                <CloseIcon />
            </IconButton>
            <IconButton className="swipe__recharge swipe__btn">
                <FlashOnIcon />
            </IconButton>
            <IconButton className="swipe__like swipe__btn">
                <FavoriteIcon />
            </IconButton>
            <IconButton className="swipe__super-like swipe__btn">
                <StarIcon />
            </IconButton>
            

        </section>
    )
}

export default SwipeButtons
