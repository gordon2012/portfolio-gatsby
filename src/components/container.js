import React from 'react';
import { Block } from 'baseui/block';

export default props => {
    const { children, width, $style, ...restProps } = props;
    return (
        <Block display="flex" justifyContent="center" $style={$style}>
            <Block width="100%" maxWidth={width} {...restProps}>
                {children}
            </Block>
        </Block>
    );
};
