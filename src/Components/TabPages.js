import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, matchPath } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import './css/SideMenu.css'

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
    render() {
        const defaultActiveIndex = panes.findIndex(pane => {
            return !!matchPath(window.location.pathname, {
                path: pane.menuItem.to,
                exact: true
            });
        });

        return (
            <BrowserRouter>
                <Tab 
                    defaultActiveIndex={defaultActiveIndex} 
                    menu={{ 
                        fluid: true, 
                        vertical: true, 
                        tabular: 'left', 
                        color: 'teal',
                        inverted: 'true' 
                    }} 
                    panes={panes}
                />
            </BrowserRouter>
        );
    }
}
export default TabPages;
