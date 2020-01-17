import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, matchPath } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import './css/TabPages.css'

const panes = [
    { 
        menuItem: { 
            as: NavLink,
            content: 'Home',
            to: '/',
            exact: true,
            key: 'Home', 
            icon: 'hand spock' 
        },
        render: () => (
            <Route path='/' exact>
                <Tab.Pane>
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
            icon: 'code branch'
        },
        render: () => (
            <Route path='/projects'>
                <Tab.Pane> 
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
            icon: 'mail'
        },
        render: () => (
            <Route path='/contact'>
                <Tab.Pane>
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
        return panes.findIndex(pane => {
            return !!matchPath(window.location.pathname, {
                path: pane.menuItem.to,
                exact: true
            });
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Tab 
                    activeIndex={this.state.activeTab}
                    menu={{ 
                        fluid: true, 
                        vertical: true, 
                        tabular: true, 
                        color: 'teal',
                        size: 'large',
                        attached: true,
                        inverted: true 
                    }} 
                    size='large'
                    panes={panes}
                    onTabChange={this.handleTabChange}
                />
            </BrowserRouter>
        );
    }
}

export default TabPages;
