import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const Container = styled.div`
    flex: 1;
    background: #ddd;
    display: flex;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        text-align: center;
        font-size: 3em;
    }
`;

const ThankyouPage = () => {
    React.useEffect(() => {
        setTimeout(() => navigate('/'), 5000);
    }, []);
    return (
        <Layout>
            <Container>
                <h1>Thank You</h1>
            </Container>
        </Layout>
    );
};

export default ThankyouPage;
