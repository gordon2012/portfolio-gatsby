import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';

import baseTheme from './src/themes/base-theme';

const engine = new Styletron({
    hydrate: document.getElementsByClassName('_styletron_hydrate_'),
});

export const wrapRootElement = ({ element }, options) => (
    <StyletronProvider value={engine}>
        <BaseProvider theme={baseTheme}>{element}</BaseProvider>
    </StyletronProvider>
);
