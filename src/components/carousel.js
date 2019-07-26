import React, { useState } from 'react';
import { styled } from 'baseui';
import { Block } from 'baseui/block';

const Image = styled('img', {
    display: 'block',
    width: '100%',
    boxShadow: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
});

const Greyout = () => {
    return (
        <Block
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            backgroundColor="rgba(0,0,0,0.6)"
            $style={{
                ':hover': {
                    backgroundColor: 'rgba(0,0,0,0.3)',
                },
            }}
        />
    );
};

const Carousel = ({ images }) => {
    const [selected, setSelected] = useState(0);

    const border = 0;

    return (
        <Block display="flex" $style={{ border: `${border}px solid red` }}>
            <Block
                flex="5"
                paddingRight="1rem"
                $style={{ border: `${border}px solid magenta` }}
            >
                <Image src={images[selected].file.url} />
            </Block>
            <Block flex="1">
                {images.map(
                    ({ title, file }, index) =>
                        index !== selected && (
                            <Block
                                key={title}
                                position="relative"
                                onClick={() => setSelected(index)}
                                marginBottom="1rem"
                                $style={{
                                    cursor: 'pointer',
                                }}
                            >
                                <Greyout />
                                <Image src={file.url} alt={title} />
                            </Block>
                        )
                )}
            </Block>
        </Block>
    );
};

export default Carousel;
