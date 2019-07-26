import { createTheme, lightThemePrimitives } from 'baseui';

export default createTheme(
    {
        ...lightThemePrimitives,
    },
    {
        breakpoints: {
            small: 600,
            medium: 900,
            large: 1200,
        },
    }
);
