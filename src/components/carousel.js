import React, { useState } from 'react';
import { Block } from 'baseui/block';
import Image from './image';

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
    return (
        <Block display="flex">
            <Block flex="5" paddingRight="1rem">
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
