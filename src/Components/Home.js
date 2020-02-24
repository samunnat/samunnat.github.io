import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import './css/Home.css'

const Hobbies = () => {
    return (
        <List size='small' color='olive' verticalAlign='middle' centered='true' celled relaxed horizontal inverted>
            <List.Item className='hobby'>
                <List.Icon name='book' color='olive' inverted/>
                <List.Content>
                    <List.Header>Reading</List.Header>
                    <List.Description>Fantasy, Sci-Fi, Tech</List.Description>
                </List.Content>
            </List.Item>
            <List.Item className='hobby'>
                <List.Icon name='picture' color='olive' inverted/>
                <List.Content>
                    <List.Header>Hiking</List.Header>
                    <List.Description>anywhere with a view</List.Description>
                </List.Content>
            </List.Item>
            <List.Item className='hobby'>
                <List.Icon name='bicycle' color='olive' inverted/>
                <List.Content>
                    <List.Header>Biking</List.Header>
                    <List.Description>preferably downhill</List.Description>
                </List.Content>
            </List.Item>
        </List>
    );
}

const Home = () => {
    return (
        <Container textAlign='center' style={{padding: '10px'}}>
            <Header size='small' color='olive' inverted>
                Ahoy-hoy! I'm a senior undergrad at CU Boulder majoring in Computer Science.
            </Header>

            <Header size='small' color='olive' inverted>
                I'm interested in Full-Stack Web Development, Big-Data Architecture, and Automation.
            </Header>
            
            <Header size='small' color='olive' inverted>My Hobbies:</Header>
            <Hobbies/>
        </Container>
    );
}

export default Home;