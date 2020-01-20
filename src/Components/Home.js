import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import './css/Home.css';

const Home = () => {
    return (
        <Container>
            <Header color='olive' inverted>
                Ahoy-hoy! I'm a senior undergrad at CU Boulder majoring in CompSci.
            </Header>
            <Header as='h3' color='olive' inverted>
                I'm interested in Full-Stack Web Dev, Big-Data Architecture, and Automation.
            </Header>
            <List color='olive' inverted>
                <List.Header as={Header} color='olive' inverted>
                    In my free time, I like to:
                </List.Header>
                <List.Item>
                    <List.Header>Test</List.Header>
                </List.Item>
                <List.Item>
                    <List.Header>Test2</List.Header>
                </List.Item>
            </List>
                {/* <ul>
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
                </ul> */}
        </Container>
    );
}

export default Home;