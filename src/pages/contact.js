import React, { useState } from 'react';
import Layout from '../components/layout';

import * as T from 'baseui/typography';
import Container from '../components/container';
import { Block } from 'baseui/block';
import { Card } from 'baseui/card';
import { StatefulInput, StyledInputContainer, SIZE } from 'baseui/input';
import Debug from '../components/debug';
import { Button } from 'baseui/button';
import { navigate } from 'gatsby';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { withStyle } from 'styletron-react';

const b = color => ({
    $style: {
        border: `3px solid ${color}`,
    },
});

const FormInput = ({ name, label, onChange }) => {
    return (
        <label>
            <T.Label2>{label}</T.Label2>
            <StatefulInput
                name={name}
                onChange={onChange}
                size={SIZE.compact}
            />
        </label>
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

            <Container width="1000px" padding="0 2rem 2rem">
                <Block backgroundColor={['red', 'blue', 'lime']}>&nbsp;</Block>
                <br />
                <Card>
                    <form
                        name="contact"
                        method="post"
                        action="/thankyou/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <FlexGrid
                            flexGridColumnCount={[1, 1, 2]}
                            flexGridColumnGap="1rem"
                            flexGridRowGap="1rem"
                        >
                            {[
                                { name: 'firstName', label: 'First Name' },
                                { name: 'lastName', label: 'Last Name' },
                                { name: 'email', label: 'Email' },
                            ].map(({ name, label }) => (
                                <FlexGridItem key={name}>
                                    <FormInput
                                        name={name}
                                        label={label}
                                        onChange={handleChange}
                                    />
                                </FlexGridItem>
                            ))}
                        </FlexGrid>
                        <FlexGrid flexGridColumnCount={4}>
                            <FlexGridItem />
                            <FlexGridItem flexGridColumnCount={3}>
                                <Button
                                    type="submit"
                                    $style={{
                                        width: '100%',
                                        marginTop: '1rem',
                                    }}
                                >
                                    Submit
                                </Button>
                            </FlexGridItem>
                        </FlexGrid>
                    </form>
                </Card>

                <br />

                <Card>
                    <Debug data={inputs} />
                </Card>
            </Container>
        </Layout>
    );
};

export default ContactPage;
