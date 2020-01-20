import React from 'react';
import { Container, Button } from 'semantic-ui-react'
import './css/InfoLinks.css'

const InfoLinks = () => (
    <Container id="infoLinks">
        <Button.Group compact color='black' style={{display: 'inline-block'}}>
            <Button
                className='linkButton'
                id='resume'
                icon={{ name: 'file alternate', color: 'teal', size: 'large'}}
                href='https://drive.google.com/open?id=1_Mpr3uOrL-YShl1i5Mv7f_KzBsISoF4j'
                rel='noopener noreferrer'
                target='_blank'
            />
            
            <Button
                className='linkButton'
                id='github grey'
                icon={{ name: 'github', color: 'grey', size: 'large'}}
                href='https://github.com/samunnat'
                rel='noopener noreferrer'
                target='_blank'
            />
            
            <Button
                className='linkButton'
                id='linkedin'
                icon={{ name: 'linkedin', color: 'blue', size: 'large'}}
                href='https://www.linkedin.com/in/samunnatlamichhane'
                rel='noopener noreferrer'
                target='_blank'
            />
        </Button.Group>
    </Container>
)

export default InfoLinks;