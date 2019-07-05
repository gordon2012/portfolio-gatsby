import React from 'react';

import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Tag, VARIANT } from 'baseui/tag';
import Search from 'baseui/icon/search';

import { styled } from 'baseui';

// console.log(VARIANT);

const Image = styled('img', {});

const WorkCard = ({ work }) => {
    return (
        <Card
            overrides={{
                Contents: {
                    style: {
                        marginTop: '0',
                        marginRight: '0',
                        marginBottom: '0',
                        marginLeft: '0',
                    },
                },
            }}
        >
            <Block paddingBottom="0.5rem" $style={{ textAlign: 'center' }}>
                <h2>{work.title}</h2>
                {work.skills.map(skill => (
                    <Tag
                        key={skill}
                        closeable={false}
                        kind="neutral"
                        variant="light"
                    >
                        {skill}
                    </Tag>
                ))}
            </Block>
            <Image
                src={work.images[0].file.url}
                margin="1rem"
                $style={{
                    objectFit: 'contain',
                    maxWidth: '100%',
                    display: 'block',
                }}
            />
            <Block
                padding="0"
                marginBottom="-16px"
                $style={{ borderTop: '1px solid #ccc' }}
            >
                <Button
                    kind="minimal"
                    $style={{ width: '100%', color: '#333' }}
                >
                    <Search size={36} title="View" />
                </Button>
            </Block>
        </Card>
    );

    return (
        <Card
            headerImage={work.images[0].file.url}
            title={work.title}
            overrides={{
                Contents: {
                    style: {
                        // border: '3px solid red',
                        marginTop: '0.2rem',
                    },
                },
            }}
        >
            <StyledBody>
                <Block marginLeft="-5px" marginBottom="0.2rem">
                    <Tag
                        $as="div"
                        closeable={false}
                        kind="neutral"
                        variant="outlined"
                    >
                        {work.category}
                    </Tag>
                </Block>

                <Block marginLeft="-5px">
                    {work.skills.map((skill, i) => (
                        <Tag
                            key={i}
                            closeable={false}
                            kind="neutral"
                            variant="solid"
                        >
                            {skill}
                        </Tag>
                    ))}
                </Block>
            </StyledBody>
            <StyledAction>
                <Button size="compact" kind="primary" style={{ width: `100%` }}>
                    <Search size={48} />
                </Button>
            </StyledAction>
        </Card>
    );
};

export default WorkCard;
