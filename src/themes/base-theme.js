import {createTheme, lightThemePrimitives} from 'baseui';

export default createTheme(
  {
    ...lightThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    // primaryFontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  {
    // add all the theme overrides here - under the hood it uses deep merge
    // animation: {
    //   timing100: '0.50s',
    // },

    breakpoints: {
        small: '600px',
        medium: '900px',
        large: '1200px',
    }


  },
);
