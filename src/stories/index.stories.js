import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider } from 'styletron-react';

import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';

const engine = new Styletron({
    hydrate: document.getElementsByClassName('_styletron_hydrate_'),
});

storiesOf('Base Web', module)
    .addDecorator(story => <Provider value={engine}>{story()}</Provider>)
    .add('Card', () => (
        <Card
            overrides={{ Root: { style: { width: '328px' } } }}
            headerImage={'https://source.unsplash.com/user/erondu/700x400'}
            title="Example card"
        >
            <StyledBody>
                Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                ornare faucibus ex, non facilisis nisl.
            </StyledBody>
            <StyledAction>
                <Button onClick={action('clicked')} style={{ width: '100%' }}>
                    Button Label
                </Button>
            </StyledAction>
        </Card>
    ));
