import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

const projectCards = [
    {
        header: { content: 'Twingua', as: Header },
        meta: 'Group',
        description: 'Geovisualization of language distribution across ingested tweets.',
        style: { backgroundColor: '#e6ffff' },
        extra: (
            <div>
                <a href='https://github.com/CUBigDataClass/Twingua' rel='noopener noreferrer' target='_blank'>
                    <Icon name='github' color='grey' size='large'/>
                </a> 
                <a href='https://www.youtube.com/watch?v=uWDh2CGj-ao&feature=youtu.be' rel='noopener noreferrer' target='_blank'>
                    <Icon name='youtube' color='red' size='large'/>
                </a> 
            </div>
        )
    },
]

const Projects = () => {
    return (
        <Card.Group items={projectCards} itemsPerRow={3} doubling={true} centered/>
    );
}

export default Projects;