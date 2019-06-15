import React from 'react';
import { Label1 } from 'baseui/typography';

import Container from './container';

export default () => (
    <Container
        width="1200px"
        backgroundColor="#333"
        padding="0.5rem"
        $style={{ textAlign: 'center' }}
    >
        <Label1 color="white" fontSize="font600">
            Copyright {new Date().getFullYear()} <strong>Gordon Doskas</strong>
        </Label1>
    </Container>
);
