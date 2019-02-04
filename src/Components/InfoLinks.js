import React from 'react';
import { Button } from 'semantic-ui-react'

const InfoLinks = () => (
    <div className="info_links">
        <Button.Group>
            <Button 
                content='Resume'
                icon='address card outline'
                color='vk'
                size='small'

                href='/resume.pdf'
            />

            <Button
                content='Github'
                icon='github'
                color='github'
                size='small'

                href='https://github.com/samunnat'
                rel='noopener noreferrer'
                target='_blank'
            />

            <Button
                content='LinkedIn'
                icon='linkedin'
                color='linkedin' 
                size='small'

                href='https://www.linkedin.com/in/samunnatlamichhane'
                rel='noopener noreferrer'
                target='_blank'
            />


        </Button.Group>
    </div>
)

export default InfoLinks;