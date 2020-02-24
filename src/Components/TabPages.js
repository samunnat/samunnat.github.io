import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, matchPath } from 'react-router-dom';
import { Tab, Container, Segment } from 'semantic-ui-react'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

const panes = [
    { 
        menuItem: { 
            as: NavLink,
            to: '/',
            exact: true,
            replace: true,
            content: 'Home',
            key: 'Home', 
            icon: { name: 'hand spock', color: 'olive' }
        },
        render: () => (
            <Route path='/' exact>
                <Tab.Pane as={Segment} color='black' inverted>
                    <Home/>
                </Tab.Pane>
            </Route>
        )
    },
    { 
        menuItem: { 
            as: NavLink,
            to: '/projects',
            replace: true,
            content: 'Projects',
            key: 'Projects', 
            icon: { name: 'code branch', color: 'yellow' }
        },
        render: () => (
            <Route path='/projects'>
                <Tab.Pane as={Segment} color='black' inverted> 
                    <Projects/>
                </Tab.Pane>
            </Route>
        )
    },
    { 
        menuItem: {
            as: NavLink,
            to: '/contact',
            replace: true,
            content: 'Contact',
            key: 'Contact',
            icon: { name: 'paper plane', color: 'orange' }
        },
        render: () => (
            <Route path='/contact'>
                <Tab.Pane as={Segment} color='black' inverted size='mini'>
                    <Contact/> 
                </Tab.Pane>
            </Route>
        )
    },
];

class TabPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.getCurrentTabIndex(),
        }
    }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeTab: activeIndex });
    }

    getCurrentTabIndex() {
        let x = panes.findIndex(pane => {
            let currentTo = window.location.hash.slice(1);
            return !!matchPath(currentTo, {
                path: pane.menuItem.to,
                exact: true,
                strict: false
            });
        });
        return (x === -1) ? 0 : x;
    }

    render() {
        return (
            <Container>
                <Router basename='/'>
                    <Tab 
                        activeIndex={this.state.activeTab}
                        menu={{
                            attached: true,
                            borderless: true,
                            color: 'black',
                            compact: true,
                            fluid: true,
                            inverted: true,
                            size: 'small',
                            tabular: false,
                            widths: 3
                        }} 
                        size='small'
                        panes={panes}
                        onTabChange={this.handleTabChange}
                    />
                </Router>
            </Container>
        );
    }
}

export default TabPages;
