import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

const projectCards = [
    {
        header: { as: Header, content: 'EaseLease', textAlign: 'center' },
        meta: 'Solo',
        description: 'A rental advertisements website built using the MERN stack.',
        style: { backgroundColor: '#e6ffff' },
        href: 'https://github.com/samunnat/EaseLease'
    },
    {
        header: { as: Header, content: 'Twingua', textAlign: 'center' },
        meta: 'Group',
        description: 'A geovisualization of language distribution across European tweets.',
        style: { backgroundColor: '#e6ffff' },
        href: 'https://github.com/samunnat/Twingua',
        extra: (
            <div>
                <a href='https://www.youtube.com/watch?v=uWDh2CGj-ao&feature=youtu.be' rel='noopener noreferrer' target='_blank'>
                    <Icon name='youtube' color='red' size='large'/>
                </a> 
            </div>
        )
    },
]

const Projects = () => {
    return (
        <Card.Group items={projectCards} itemsPerRow={4} doubling={true} centered/>
    );
}

export default Projects;