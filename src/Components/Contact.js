import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Header, Input, TextArea } from 'semantic-ui-react';

const userId = 'user_NXoA8UMWyzrRaVfz6wTdz';
const templateId = 'template_s7TrsWtP'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        emailjs.init(userId);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }


    sendEmail(e) {
        e.preventDefault();

        const { email, subject, message } = this.state;
        let template_params = {
            from_name: email,
            to_name: 'lamichhaneakash1999@gmail.com',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            'gmail',
            templateId,
            template_params,
            userId,
        )

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        const { name, email, subject, message } = this.state;

        return (
            <Container>
                <Header size='small' color='orange'>Feel free to ping me at sala6632@colorado.edu.</Header>
                <Form color='grey' inverted>
                    <Form.Field 
                        label='Name' 
                        placeholder='Ed Chambers'
                        control={Input} 
                        width='12'
                        value={name}
                        required
                        onChange={this.handleChange.bind(this, 'name')}
                    />
                    
                    <Form.Field 
                        id='form-input-control-error-email'
                        label='Email' 
                        placeholder='donald.dunn@hooli.xyz'
                        control={Input}
                        width='12'
                        value={email}
                        required
                        onChange={this.handleChange.bind(this, 'email')}
                    />
                    <Form.Field
                        label='Subject' 
                        placeholder='Azure Storage Rates' 
                        control={Input} 
                        width='12'
                        value={subject}
                        inline
                        required
                        onChange={this.handleChange.bind(this, 'subject')}
                    />
                    <Form.Field
                        label='Message'
                        control={TextArea} 
                        value={message}
                        inline
                        required
                        onChange={this.handleChange.bind(this, 'message')}
                    />

                    <Form.Button
                        content='Submit'
                        type='submit'
                        color='orange'
                        onClick={this.sendEmail.bind(this)}
                    />
                </Form>
            </Container>
        );
    }
}

export default Contact;