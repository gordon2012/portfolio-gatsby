import React from 'react';
import { Card } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag } from 'baseui/tag';
import Search from 'baseui/icon/search';
import { styled } from 'baseui';
import { Modal, ModalHeader, ModalBody, FocusOnce } from 'baseui/modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Link from './link';
import Carousel from './carousel';

const Image = styled('img', {
    display: 'block',
    width: '100%',
    boxShadow: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
});

const Debug = ({ title, tabsize = 2, children }) => (
    <Card $style={{ marginBottom: '1rem' }}>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            <code>
                {title && `${title} = `}
                {JSON.stringify(children, null, tabsize)}
            </code>
        </pre>
    </Card>
);

const WorkCard = ({ work }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <>
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
                        >
                            {skill}
                        </Tag>
                    ))}
                </Block>
                <Block padding="0.5rem">
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

            <Modal
                size="auto"
                onClose={() => setOpen(false)}
                isOpen={isOpen}
                display="flex"
                flexDirection="column"
                overrides={{
                    Root: {
                        style: {
                            paddingTop: '1rem',
                            paddingRight: '10vw',
                            paddingBottom: '1rem',
                            paddingLeft: '10vw',
                        },
                    },
                    Dialog: {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                        },
                    },
                }}
            >
                <FocusOnce>
                    <ModalHeader>{work.title}</ModalHeader>
                </FocusOnce>
                <ModalBody $style={{ flex: '1' }}>
                    <Block
                        maxWidth="800px"
                        margin="0 auto"
                        paddingBottom="2rem"
                    >
                        {documentToReactComponents(work.body.json)}
                    </Block>

                    {/* <Debug title="skills">{work.skills}</Debug>
                    <Debug title="links">{work.links}</Debug>
                    <Debug title="images">{work.images}</Debug> */}

                    {work.images.length > 1 ? (
                        <Block maxWidth="800px" margin="0 auto">
                            <Carousel images={work.images} />
                        </Block>
                    ) : (
                        <Block maxWidth="600px" margin="0 auto">
                            <Image
                                src={work.images[0].file.url}
                                alt={work.images[0].title}
                            />
                        </Block>
                    )}
                </ModalBody>
                <Block
                    display={['block', 'flex']}
                    $style={{
                        padding: '0.75rem',
                    }}
                >
                    {work.links.map((link, i) => (
                        <Block
                            key={i}
                            flex="1"
                            $style={{
                                padding: '0.75rem',
                            }}
                        >
                            <Link
                                to={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                $style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                <Button $style={{ width: '100%' }}>
                                    {link.title}
                                </Button>
                            </Link>
                        </Block>
                    ))}
                    <Block
                        padding="0.75rem"
                        flex={['1', '0']}
                        $style={{
                            '@media (min-width: 600px)': {
                                order: '-1',
                            },
                        }}
                    >
                        <Button
                            autoFocus
                            onClick={() => setOpen(false)}
                            $style={{ width: '100%' }}
                        >
                            Close
                        </Button>
                    </Block>
                </Block>
            </Modal>
        </>
    );
};

export default WorkCard;
