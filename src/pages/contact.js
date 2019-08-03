import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Block } from 'baseui/block';
import * as T from 'baseui/typography';
import { Card } from 'baseui/card';
import { StatefulInput } from 'baseui/input';
import { Button } from 'baseui/button';
import { Checkbox } from 'baseui/checkbox';
import { StatefulTextarea } from 'baseui/textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import Container from '../components/container';
import Link from '../components/link';

const Input = ({ name, children, onChange, ...props }) => {
    return (
        <Block as="label" {...props}>
            <T.Label2>{children}</T.Label2>
            <StatefulInput name={name} onChange={onChange} size="compact" />
        </Block>
    );
};

const CheckInput = ({ name, children, onChange, checked, ...props }) => {
    return (
        <Block as="label" {...props}>
            <Checkbox name={name} checked={checked} onChange={onChange}>
                {children}
            </Checkbox>
        </Block>
    );
};

const Textarea = ({ name, children, onChange, height = 1, ...props }) => {
    return (
        <Block as="label" {...props}>
            <T.Label2>{children}</T.Label2>
            <StatefulTextarea
                name={name}
                onChange={onChange}
                size="compact"
                overrides={{
                    Input: {
                        style: {
                            height: `${(height + 3) * 20}px`,
                        },
                    },
                }}
            />
        </Block>
    );
};

const encode = data =>
    Object.entries(data)
        .map(
            ([name, value]) =>
                `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        )
        .join('&');

const ContactPage = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = ({ target: { name, value } }) => {
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const handleCheck = ({ target: { name } }) => {
        setInputs(inputs => ({ ...inputs, [name]: inputs[name] ? '' : 'Yes' }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...inputs,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => console.error(error));
    };

    return (
        <Layout backgroundColor="#ddd">
            <T.H2 $style={{ textAlign: 'center' }}>Contact Me</T.H2>

            <Container width="1200px" padding="0 2rem 2rem">
                <Block
                    display="grid"
                    gridTemplateColumns={['1fr', '1fr', '3fr 7fr']}
                    gridGap="2rem"
                >
                    <Block>
                        <Card>
                            <T.H5 $style={{ textAlign: 'center' }}>
                                Find me on Social Media
                            </T.H5>
                            <Block
                                display="grid"
                                gridTemplateColumns={[
                                    '1fr',
                                    '1fr 1fr 1fr 1fr',
                                    '1fr',
                                ]}
                                gridGap="1rem"
                            >
                                {[
                                    ['github', 'https://github.com/gordon2012'],
                                    [
                                        'linkedin',
                                        'https://www.linkedin.com/in/gordon-doskas',
                                    ],
                                    [
                                        'twitter',
                                        'https://twitter.com/gordondoskas',
                                    ],
                                    ['facebook', 'https://facebook.com'],
                                ].map(([icon, url]) => (
                                    <Block
                                        key={icon}
                                        flex="1"
                                        display="flex"
                                        justifyContent="center"
                                    >
                                        <Link
                                            to={url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <Button shape="round" size="large">
                                                <FontAwesomeIcon
                                                    icon={['fab', icon]}
                                                    size="3x"
                                                />
                                            </Button>
                                        </Link>
                                    </Block>
                                ))}
                            </Block>
                        </Card>
                    </Block>

                    <Block>
                        <Card>
                            <T.H4 $style={{ textAlign: 'center' }}>
                                Send me a Note
                            </T.H4>
                            <form
                                key="form"
                                name="contact"
                                method="post"
                                action="/thankyou/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />

                                <Block
                                    display="grid"
                                    gridTemplateColumns="1fr 1fr"
                                    gridGap="1rem"
                                >
                                    <Input
                                        name="firstName"
                                        onChange={handleChange}
                                        gridColumn={['span 2', 'span 1']}
                                    >
                                        First Name
                                    </Input>

                                    <Input
                                        name="email"
                                        onChange={handleChange}
                                        gridColumn={['span 2', 'span 1']}
                                    >
                                        Email
                                    </Input>

                                    <Textarea
                                        name="message"
                                        onChange={handleChange}
                                        height={
                                            inputs.message
                                                ? inputs.message.split('\n')
                                                      .length
                                                : 1
                                        }
                                        gridColumn="span 2"
                                    >
                                        Message
                                    </Textarea>

                                    <CheckInput
                                        name="newsletter"
                                        onChange={handleCheck}
                                        checked={inputs.newsletter}
                                        gridColumn="span 2"
                                    >
                                        Yes! Subscribe me to your Newsletter.
                                    </CheckInput>
                                </Block>

                                <Block $style={{ textAlign: 'center' }}>
                                    <Button
                                        type="submit"
                                        $style={{
                                            width: '100%',
                                            marginTop: '1rem',
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Block>
                            </form>
                        </Card>
                    </Block>
                </Block>
            </Container>
        </Layout>
    );
};

export default ContactPage;
