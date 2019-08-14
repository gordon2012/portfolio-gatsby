import React from 'react';
import { Card } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag } from 'baseui/tag';
import Search from 'baseui/icon/search';

import Image from './image';

const WorkCard = ({ work, setOpen, filter, setFilter }) => {
    return (
        <Card
            overrides={{
                Contents: {
                    style: {
                        marginTop: '0',
                        marginRight: '0',
                        marginBottom: '0',
                        marginLeft: '0',
                        height: '100%',
                        display: 'flex',
                    },
                },
                Body: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            }}
        >
            <Block
                paddingBottom="0.5rem"
                $style={{
                    textAlign: 'center',
                    backgroundColor: '#333',
                    borderBottom: '1px solid white',
                }}
            >
                <T.H5 color="white" margin="0" padding="1rem 0">
                    {work.title}
                </T.H5>
                {work.skills.map(skill => (
                    <Tag
                        key={skill}
                        closeable={false}
                        kind="negative"
                        variant="solid"
                        variant={
                            filter === skill || filter === ''
                                ? 'solid'
                                : 'light'
                        }
                        onClick={
                            filter === skill ? null : () => setFilter(skill)
                        }
                    >
                        {skill}
                    </Tag>
                ))}
            </Block>
            <Block
                padding="0.5rem"
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Image src={work.images[0].file.url} />
            </Block>
            <Block padding="0" marginBottom="-16px">
                <Button
                    kind="minimal"
                    $style={{
                        width: '100%',
                        color: '#333',
                    }}
                    onClick={() => setOpen(s => !s)}
                >
                    <Search size={36} title="View" />
                </Button>
            </Block>
        </Card>
    );
};

export default WorkCard;
