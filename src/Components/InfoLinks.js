import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

const InfoLinks = () => (
    <div className="info_links">

        <Button 
            content='Resume'
            icon='address card outline'
            color='orange' inverted
            size='small'

            href='/sam_resume.pdf'
        />

        <Button
            content='Github'
            icon='github'
            color='github' inverted
            size='small'

            href='https://github.com/samunnat'
            rel='noopener noreferrer'
            target='_blank'
        />

        <Button
            content='LinkedIn'
            icon='linkedin'
            color='blue' inverted
            size='small'

            href='https://www.linkedin.com/in/samunnatlamichhane'
            rel='noopener noreferrer'
            target='_blank'
        />
    </div>
)

export default InfoLinks;