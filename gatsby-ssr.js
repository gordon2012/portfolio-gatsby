import React from 'react';
import { Server as Styletron } from 'styletron-engine-atomic';
import { BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';

import baseTheme from './src/themes/base-theme';

const engine = new Styletron();

export const wrapRootElement = ({ element }) => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={baseTheme}>{element}</BaseProvider>
        </StyletronProvider>
    );
};

export const onRenderBody = ({ setHeadComponents }) => {
    const stylesheets = engine.getStylesheets();
    const headComponents = stylesheets[0].css
        ? stylesheets.map((sheet, index) => (
              <style
                  className="_styletron_hydrate_"
                  dangerouslySetInnerHTML={{
                      __html: sheet.css,
                  }}
                  key={index}
                  media={sheet.attrs.media}
                  data-hydrate={sheet.attrs['data-hydrate']}
              />
          ))
        : null;

    setHeadComponents(headComponents);
};
