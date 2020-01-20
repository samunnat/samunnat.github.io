import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './css/Home.css';

const Home = () => {
    return (
        <Container>
            <Header color='olive' inverted>
                Ahoy-hoy! I'm a senior undergrad at CU Boulder majoring in CompSci. <br/><br/>
                I'm interested in Full-Stack Web Dev, Big-Data Infrastructure, and Automation.
            </Header>
            <Header color='olive' inverted>
                In my free time, I like to:
                    <ul>
                        <li>
                            Read
                            <ul>
                                <li>Sci-Fi, Fantasy, Tech</li>
                                <li>Favorites: 
                                    <ul>
                                        <li>Dune</li>
                                        <li>A Storm of Swords</li>
                                        <li>Clean Code</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Hike
                            <ul>
                                <li>
                                    anywhere with a view
                                </li>
                            </ul>
                        </li>
                    </ul>
            </Header>
        </Container>
    );
}

export default Home;