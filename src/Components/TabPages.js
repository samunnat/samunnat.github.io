import React, { Component } from 'react';
import { Tab, Container } from 'semantic-ui-react'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

const panes = [
    { 
        menuItem: { 
            content: 'Home',
            key: 'Home', 
            icon: { name: 'hand spock', color: 'olive' }
        },
        render: () => (
            <Tab.Pane color='black' inverted>
                <Home/>
            </Tab.Pane>
        )
    },
    { 
        menuItem: { 
            content: 'Projects',
            key: 'Projects', 
            icon: { name: 'code branch', color: 'yellow' }
        },
        render: () => (
            <Tab.Pane color='black' inverted> 
                <Projects/>
            </Tab.Pane>
        )
    },
    { 
        menuItem: {
            content: 'Contact',
            key: 'Contact',
            icon: { name: 'paper plane', color: 'orange' }
        },
        render: () => (
            <Tab.Pane color='black' inverted>
                <Contact/> 
            </Tab.Pane>
        )
    },
];

const TabPages = () => {
    return (
        <Container>
                <Tab 
                    defaultActiveIndex={0}
                    menu={{ 
                        fluid: false,
                        attached: false,
                        tabular: false,
                        size: 'large',
                        inverted: true,
                        widths: 3,
                        borderless: true,
                        color: 'black'
                    }} 
                    size='large'
                    panes={panes}
                />
        </Container>
    );
}

export default TabPages;
