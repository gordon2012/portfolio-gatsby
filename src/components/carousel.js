import React, { useState } from 'react';
import styled from 'styled-components';

import Image from './image';

const Greyout = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    :hover {
        background: rgba(0, 0, 0, 0.3);
    }
`;

const Wrapper = styled.div`
    display: flex;
    & > div:nth-child(1) {
        flex: 5;
        padding-right: 1rem;
    }
    & > div:nth-child(2) {
        flex: 1;
        & > div {
            cursor: pointer;
            margin-bottom: 1rem;
            position: relative;
        }
    }
`;

const Carousel = ({ images }) => {
    const [selected, setSelected] = useState(0);
    return (
        <Wrapper>
            <div>
                <Image src={images[selected].file.url} />
            </div>
            <div>
                {images.map(
                    ({ title, file }, index) => index !== selected && (
                        <div
                            key={title}
                            onClick={() => setSelected(index)}
                        >
                            <Greyout />
                            <Image src={file.url} alt={title} />
                        </div>
                    )
                )}
            </div>
        </Wrapper>
    );
};

export default Carousel;
