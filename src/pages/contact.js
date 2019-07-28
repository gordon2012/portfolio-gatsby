import React, { useState } from 'react';
import Layout from '../components/layout';

import * as T from 'baseui/typography';
import Container from '../components/container';
import { Block } from 'baseui/block';
import { Card } from 'baseui/card';
import { Input } from 'baseui/input';
import Debug from '../components/debug';
import { Button } from 'baseui/button';
import { navigate } from 'gatsby';

const b = color => ({
    $style: {
        border: `3px solid ${color}`,
    },
});

const FormInput = ({ name, label, onChange }) => {
    return (
        <Block paddingBottom="1rem">
            <label>
                {label}
                <Input name={name} onChange={onChange} />
            </label>
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

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        // console.log(
        //     encode({
        //         'form-name': form.getAttribute('name'),
        //         ...inputs,
        //     })
        // );

        // console.log(inputs);

        // console.log(Object.entries(inputs));

        // return;
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

    // const FormInput = props => (
    //     <BaseFormInput onChange={handleChange} {...props} />
    // );
    // const FormInput = FormInput();

    return (
        <Layout backgroundColor="#ddd">
            <T.H2 $style={{ textAlign: 'center' }}>Contact Me</T.H2>

            <Container width="1200px" padding="0 2rem 2rem">
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
                        {[
                            { name: 'firstName', label: 'First Name' },
                            { name: 'lastName', label: 'Last Name' },
                            { name: 'email', label: 'Email' },
                        ].map(({ name, label }) => (
                            <FormInput
                                key={name}
                                name={name}
                                label={label}
                                onChange={handleChange}
                            />
                        ))}
                        <input type="submit" />
                    </form>
                    {/* <Button type="submit">Submit</Button> */}
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
