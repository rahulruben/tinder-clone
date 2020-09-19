import React, { useState, useEffect } from 'react'
import './Cards.scss';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';

function Cards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const getCards = async () => {
            const request = await axios.get('/cards');
            setPeople(request.data);
        }
        getCards();
    }, [])

    const swiped = (direction, nameToDelete) => {
        // setLastDirection(direction);
    }

    return (
        <section className="cards">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                // onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.imgUrl}` }}
                        className="card"
                    >

                        <div className="card__heading">
                            <h4>{person.name}</h4>
                            <h5>{person.description}</h5>
                        </div>
                    </div>
                </TinderCard>
            ))}

        </section>
    )
}

export default Cards
