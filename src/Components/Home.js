import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import './css/Home.css'

const Hobbies = () => {
    return (
        <List size='big' verticalAlign='middle' celled relaxed horizontal centered inverted>
            <List.Header as={Header} size='small' color='olive' inverted>Hobbies:</List.Header>
            <List.Item className='hobby'>
                <List.Icon name='book' color='olive' inverted/>
                <List.Content>
                    <List.Header size='small'>Reading</List.Header>
                    <List.Description>Fantasy, Sci-Fi, Tech</List.Description>
                </List.Content>
            </List.Item>
            <List.Item className='hobby'>
                <List.Icon name='picture' color='olive' inverted/>
                <List.Content>
                    <List.Header size='small'>Hiking</List.Header>
                    <List.Description>anywhere with a view</List.Description>
                </List.Content>
            </List.Item>
            <List.Item className='hobby'>
                <List.Icon name='bicycle' color='olive' inverted/>
                <List.Content>
                    <List.Header size='small'>Biking</List.Header>
                    <List.Description>preferably downhill</List.Description>
                </List.Content>
            </List.Item>
        </List>
    );
}

const Home = () => {
    return (
        <Container textAlign='center' style={{padding: '10px'}}>
            <Header color='olive' inverted>
                Ahoy-hoy! I'm a senior undergrad at CU Boulder majoring in Computer Science.
            </Header>

            <Header as='h3' color='olive' inverted>
                I'm interested in Full-Stack Web Development, Big-Data Architecture, and Automation.
            </Header>
            
            <Hobbies/>
        </Container>
    );
}

export default Home;