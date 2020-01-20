import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, matchPath } from 'react-router-dom';
import { Tab, Container } from 'semantic-ui-react'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

const panes = [
    { 
        menuItem: { 
            as: NavLink,
            content: 'Home',
            to: '/',
            exact: true,
            key: 'Home', 
            icon: { name: 'hand spock', color: 'olive' }
        },
        render: () => (
            <Route path='/' exact>
                <Tab.Pane color='black' inverted>
                    <Home/>
                </Tab.Pane>
            </Route>
        )
    },
    { 
        menuItem: { 
            as: NavLink,
            content: 'Projects',
            to: '/projects',
            key: 'Projects', 
            icon: { name: 'code branch', color: 'yellow' }
        },
        render: () => (
            <Route path='/projects'>
                <Tab.Pane color='black' inverted> 
                    <Projects/>
                </Tab.Pane>
            </Route>
        )
    },
    { 
        menuItem: {
            as: NavLink,
            content: 'Contact',
            to: '/contact',
            key: 'Contact',
            icon: { name: 'paper plane', color: 'orange' }
        },
        render: () => (
            <Route path='/contact'>
                <Tab.Pane color='black' inverted>
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

    handleTabChange = (e, { activeIndex }) => this.setState({ activeTab: activeIndex })

    componentDidUpdate() {
        window.onpopstate = (e) => {
            this.setState({
                activeTab: this.getCurrentTabIndex()
            })
        }
    }

    getCurrentTabIndex() {
        let x = panes.findIndex(pane => {
            return !!matchPath(window.location.pathname, {
                path: pane.menuItem.to,
                exact: true,
                strict: true
            });
        });
        console.log(x);
        return x;
    }

    render() {
        return (
            <Container>
                <Router basename={process.env.PUBLIC_URL}>
                    <Tab 
                        activeIndex={this.state.activeTab}
                        menu={{ 
                            fluid: false,
                            attached: false,
                            tabular: false,
                            size: 'large',
                            inverted: true,
                            widths: 3,
                            borderless: true,
                            color: 'black',
                        }} 
                        size='large'
                        panes={panes}
                        onTabChange={this.handleTabChange}
                    />
                </Router>
            </Container>
        );
    }
}

export default TabPages;
