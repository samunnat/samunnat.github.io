import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

const projectCards = [
    {
        header: { content: 'EaseLease', as: Header },
        meta: 'Solo',
        description: 'Website to [rent]/[rent out] stuff.',
        style: { backgroundColor: '#e6ffff' },
        href: 'https://github.com/samunnat/EaseLease'
    },
    {
        header: { content: 'Twingua', as: Header },
        meta: 'Group',
        description: 'Geovisualization of language distribution across ingested tweets.',
        style: { backgroundColor: '#e6ffff' },
        href: 'https://github.com/CUBigDataClass/Twingua',
        extra: (
            <div>
                <a href='https://www.youtube.com/watch?v=uWDh2CGj-ao&feature=youtu.be' rel='noopener noreferrer' target='_blank'>
                    <Icon name='youtube' color='red' size='large' link='true'/>
                    Demo
                </a> 
            </div>
        )
    },
]

const Projects = () => {
    return (
        <Card.Group color='red' inverted items={projectCards} itemsPerRow={3} doubling={true} centered/>
    );
}

export default Projects;