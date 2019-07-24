import React from 'react';
import { Server as Styletron } from 'styletron-engine-atomic';
// import { Provider } from 'styletron-react';
import {BaseProvider} from 'baseui';
import {Provider as StyletronProvider} from 'styletron-react';

import baseTheme from './src/themes/base-theme';

// console.log('GATSBY SSR');


export const wrapRootElement = ({ element }, options) => {
    const engine = new Styletron(options);
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={baseTheme}>
                {element}
            </BaseProvider>
        </StyletronProvider>
    );
};

export const onRenderBody = () => {
    const engine = new Styletron(options);

    return (
        <style></style>
    );

};





// export default function App() {
//   return (
//     <StyletronProvider value={engine}>
//       <BaseProvider theme={LightTheme}>
//         <YourApp />
//       </BaseProvider>
//     </StyletronProvider>
//   );
// }