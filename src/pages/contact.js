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

import { Checkbox } from 'baseui/checkbox';
import { StatefulTextarea as Textarea } from 'baseui/textarea';

const b = color => ({
    $style: {
        border: `3px solid ${color}`,
    },
});

const Input = ({ type = 'text', name, children, onChange, ...props }) => {
    // let Element;
    // switch(type) {

    // }

    // const Element = () => {
    //     switch (type) {
    //         case 'checkbox':
    //             return (
    //                 <>
    //                     <T.Label2>&nbsp;</T.Label2>
    //                     <Checkbox
    //                         name={name}
    //                         // checked={inputs[name]}
    //                         onChange={onChange}
    //                     >
    //                         {children}
    //                     </Checkbox>
    //                 </>
    //             );
    //             break;
    //         case 'textarea':
    //             return <Textarea />;
    //             break;
    //         default:
    //             return (
    //                 <StatefulInput
    //                     key={name}
    //                     name={name}
    //                     onChange={onChange}
    //                     size={SIZE.compact}
    //                 />
    //             );
    //             break;
    //     }
    // };

    return (
        <Block as="label" {...props}>
            <T.Label2>{children}</T.Label2>
            <StatefulInput
                name={name}
                onChange={onChange}
                size={SIZE.compact}
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
        // const new

        setInputs(inputs => ({ ...inputs, [name]: inputs[name] ? '' : 'Yes' }));

        // console.log(!event.target.value);
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

    // const withChange = Component => props => (
    //     <Component {...props} onChange={handleChange} />
    // );

    // const withFlexGridItem = Component => props => (
    //     <FlexGridItem>
    //         <Component {...props} />
    //     </FlexGridItem>
    // );

    // const Input = withFlexGridItem(FormInput);

    // const Input = props => {
    //     return <FormInput onChange={handleChange} {...props} />;
    // };

    return (
        <Layout backgroundColor="#ddd">
            <T.H2 $style={{ textAlign: 'center' }}>Contact Me</T.H2>

            <Container width="1000px" padding="0 2rem 2rem">
                <Block backgroundColor={['red', 'blue', 'lime']}>&nbsp;</Block>
                <br />
                <Card>
                    <form
                        key="form"
                        name="contact"
                        method="post"
                        action="/thankyou/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        {/* <FlexGrid
                            flexGridColumnCount={[1, 1, 2]}
                            flexGridColumnGap="1rem"
                            flexGridRowGap="1rem"
                        > */}
                        <Block
                            display="grid"
                            gridTemplateColumns="1fr 1fr"
                            gridGap="1rem"
                        >
                            <Input name="firstName" onChange={handleChange}>
                                First Name
                            </Input>

                            <Input name="lastName" onChange={handleChange}>
                                Last Name
                            </Input>

                            <Input name="email" onChange={handleChange}>
                                Email
                            </Input>

                            <FlexGridItem>
                                <T.Label2>&nbsp;</T.Label2>
                                <Checkbox
                                    name="newsletter"
                                    checked={inputs.newsletter}
                                    onChange={handleCheck}
                                >
                                    Yes! Subscribe me to your Newsletter.
                                </Checkbox>
                            </FlexGridItem>

                            <FlexGridItem>
                                <T.Label2>Message</T.Label2>
                                <Textarea />
                            </FlexGridItem>
                            {/* </FlexGrid> */}
                        </Block>

                        <Block $style={{ textAlign: 'center' }}>
                            <Button
                                type="submit"
                                $style={{
                                    // width: '100%',
                                    marginTop: '1rem',
                                }}
                            >
                                Submit
                            </Button>
                        </Block>
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
