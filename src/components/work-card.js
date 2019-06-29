import React from 'react';

import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Tag } from 'baseui/tag';
import Search from 'baseui/icon/search';

const WorkCard = ({ work }) => {
    return (
        <Card overrides={{
            Contents: {
                style: {
                    margin: '0',
                    marginBottom: '0',
                }
            },
        }}>
            <img src={work.images[0].file.url} style={{
                objectFit: 'contain',
                maxWidth: '100%',
                display: 'block',
            }}/>

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
                <Block
                    marginLeft="-5px"
                    marginBottom="0.2rem"
                >
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
                <Button
                    size="compact"
                    kind="primary"
                    style={{ width: `100%` }}
                >
                    <Search size={48} />
                </Button>
            </StyledAction>
        </Card>
    );
};

export default WorkCard;
