import React from 'react';
import { Container, Button } from 'semantic-ui-react'
import './css/InfoLinks.css'

const InfoLinks = () => (
    <Container id="infoLinks">
        <Button.Group attached style={{display: 'inline-block'}}>
            <Button
                className='linkButton'
                id='resume'
                icon='address card outline big'
                href='https://drive.google.com/open?id=1_Mpr3uOrL-YShl1i5Mv7f_KzBsISoF4j'
                rel='noopener noreferrer'
                target='_blank'
            />
            
            <Button
                className='linkButton'
                id='github'
                icon='github big'
                href='https://github.com/samunnat'
                rel='noopener noreferrer'
                target='_blank'
            />

            <Button
                className='linkButton'
                id='linkedin'
                icon='linkedin big'
                href='https://www.linkedin.com/in/samunnatlamichhane'
                rel='noopener noreferrer'
                target='_blank'
            />
        </Button.Group>
    </Container>
)

export default InfoLinks;