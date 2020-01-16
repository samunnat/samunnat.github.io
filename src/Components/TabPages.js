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
            <Route path={['/', '/home']} exact>
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
            <Route path='/projects' exact>
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
            <Route path='/contact' exact>
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
            activeTab: this.getCurrentTabIndex()
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

    componenentDidUpdate() {
        this._isMounted = true;
        window.onpopstate = () => {
            if (this._isMounted) {
                console.log("detected back");
                this.setState({
                    activeTab: this.getCurrentTabIndex()
                });
            }
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Tab 
                    activeIndex={this.state.activeIndex}
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
                    onTabChange ={this.handleChange}
                />
            </BrowserRouter>
        );
    }
}

export default TabPages;
