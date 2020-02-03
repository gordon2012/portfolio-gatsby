import React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Form from '../components/form';
import Input from '../components/input';
import UnstyledLink from '../components/link';

const encode = data =>
    Object.entries(data)
        .map(
            ([name, value]) =>
                `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        )
        .join('&');

const Background = styled.div`
    flex: 1;
    background: #ddd;
`;

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    h1 {
        margin-bottom: 2rem;
        text-align: center;
    }
`;

const Card = styled.div`
    background: white;
    padding: 2rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    @media (max-width: 799px) {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }
    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 2fr;
    @media (max-width: 799px) {
        grid-template-columns: 1fr;
    }
`;

const Social = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Link = styled(UnstyledLink)`
    width: 80px;
    height: 80px;
    font-size: 3em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    background: #276ef1;
    color: white;
    :hover {
        border: 5px solid #276ef1;
        background: white;
        color: #276ef1;
    }
`;

const Button = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.2em;
    border: 3px solid #276ef1;
    background: #276ef1;
    color: white;
    :hover {
        opacity: 0.8;
    }
`;

const ContactPage = () => {
    const handleSubmit = input => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                ...input,
            }),
        })
            .then(() => navigate('/thankyou'))
            .catch(error => console.error(error));
    };

    const social = [
        ['github', 'https://github.com/gordon2012'],
        ['linkedin', 'https://www.linkedin.com/in/gordon-doskas'],
        ['twitter', 'https://twitter.com/gordondoskas'],
    ];

    return (
        <Layout>
            <SEO title="Contact" />
            <Background>
                <Container>
                    <h1>Contact Me</h1>
                    <Grid>
                        <div>
                            <Card>
                                <h2>Find me on Social Media</h2>
                                <Social>
                                    {social.map(([icon, url]) => (
                                        <Link
                                            key={icon}
                                            to={url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <FontAwesomeIcon
                                                icon={['fab', icon]}
                                            />
                                        </Link>
                                    ))}
                                </Social>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <h2>Send me a Note</h2>
                                <Form
                                    name="contact"
                                    onSubmit={handleSubmit}
                                    data-netlify="true"
                                    data-netlify-honeypot="lastName"
                                >
                                    <Input
                                        blank
                                        type="hidden"
                                        name="form-name"
                                        value="contact"
                                    />
                                    <Input
                                        required
                                        name="firstName"
                                        title="First Name"
                                    />
                                    <Input
                                        type="honeypot"
                                        name="lastName"
                                        title="Last Name"
                                    />
                                    <Input
                                        required
                                        name="email"
                                        title="Email"
                                    />
                                    <Input
                                        required
                                        type="textarea"
                                        name="message"
                                        title="Message"
                                    />
                                    <Input
                                        type="checkbox"
                                        name="newsletter"
                                        title="Subscribe to my Newsletter"
                                    />
                                    <Button>Submit</Button>
                                </Form>
                            </Card>
                        </div>
                    </Grid>
                </Container>
            </Background>
        </Layout>
    );
};

export default ContactPage;
