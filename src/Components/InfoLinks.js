import React from 'react';
import { Button } from 'semantic-ui-react'
import './css/InfoLinks.css'

const InfoLinks = () => (
    <div id="infoLinks">
        <Button.Group className='linkButtonGroup'>
            <Button 
                className='linkButton'
                id='resume'
                content='Resume'
                icon='address card outline'
                size='small'

                href='https://drive.google.com/open?id=1_Mpr3uOrL-YShl1i5Mv7f_KzBsISoF4j'
                rel='noopener noreferrer'
                target='_blank'
            />

            <Button
                className='linkButton'
                id='github'
                content='GitHub'
                icon='github'
                size='small'

                href='https://github.com/samunnat'
                rel='noopener noreferrer'
                target='_blank'
            />

            <Button
                className='linkButton'
                id='linkedin'
                content='LinkedIn'
                icon='linkedin'
                size='small'
                
                href='https://www.linkedin.com/in/samunnatlamichhane'
                rel='noopener noreferrer'
                target='_blank'
            />
        </Button.Group>
    </div>
)

export default InfoLinks;