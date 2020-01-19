import React from 'react';
import { Card } from 'semantic-ui-react';

const projectCards = [
    {
        image: { src: "https://neilpatel.com/wp-content/uploads/2018/12/google.jpg" },
        header: 'Test1',
        meta: 'Solo',
        description: 'Desc1',
        color: 'grey'
    },
    {
        header: 'Test1',
        description: 'Desc1',
        icon: 'user',
        color: 'grey',
        meta: 'Group'
    },
    {
        header: 'Test1',
        description: 'Desc1',
        icon: 'user',
        color: 'grey',
        meta: 'Group'
    },
    {
        header: 'Test1',
        description: 'Desc1',
        icon: 'user',
        color: 'grey',
        meta: 'Group'
    }
]

const Projects = () => {
    return (
        <Card.Group items={projectCards} itemsPerRow={3} doubling={true} textAlign='center'/>
    );
}

export default Projects;