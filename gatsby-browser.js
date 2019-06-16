import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
// import { Provider } from 'styletron-react';
import {BaseProvider} from 'baseui';
import {Provider as StyletronProvider} from 'styletron-react';

import baseTheme from './theme/base-theme';


const engine = new Styletron({
  hydrate: document.getElementsByClassName('_styletron_hydrate_'),
});

export const wrapRootElement = ({ element }, options) => (
//   <Provider value={engine}>{element}</Provider>

    <StyletronProvider value={engine}>
        <BaseProvider theme={baseTheme}>
            <YourApp />
        </BaseProvider>
    </StyletronProvider>



);






// export default function App() {
//   return (
//     <StyletronProvider value={engine}>
//       <BaseProvider theme={LightTheme}>
//         <YourApp />
//       </BaseProvider>
//     </StyletronProvider>
//   );
// }