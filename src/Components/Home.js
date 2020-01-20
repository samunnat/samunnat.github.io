import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './css/Home.css'

const myInfo = {
    name: 'Sam Lamichhane',
    city: 'Boulder, CO',
    interests: [
        'Web Dev', 'Big-Data Analytics', 'Automation'
    ],
    hobbies: {
        'reading': {
            'genres': ['Science Fiction, Fantasy, Tech'],
            'favorites': ['Dune', 'A Song of Ice and Fire', 'Clean Code' ]
        },
        'hiking': 'anywhere with a view',
    },
};

const Home = () => {
    return (
        <Container>
            <Header color='olive' inverted textAlign='center'>
                Ahoy-hoy! I'm a senior undergrad at CU Boulder majoring in CompSci.
            </Header>
            <pre>
                <span class='innerPre'>
                {JSON.stringify(myInfo, null, 4)}
                </span>
            </pre>
        </Container>
    );
}

export default Home;