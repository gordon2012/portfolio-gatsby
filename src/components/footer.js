import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #333;
    color: white;
    display: flex;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    strong {
        font-family: 'Fira Code', 'Helvetica', 'Arial', 'sans-serif';
        font-size: 1.1em;
    }
    & > div {
        width: 100%;
        max-width: 1200px;
    }
`;

const Footer = () => (
    <Container>
        <div>
            <span>
                Copyright {new Date().getFullYear()} &nbsp; &nbsp;
                <strong>Gordon Doskas</strong>
            </span>
        </div>
    </Container>
);

export default Footer;
