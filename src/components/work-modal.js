import React from 'react';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import { Modal, ModalHeader, ModalBody, FocusOnce } from 'baseui/modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Debug from './debug';
import Image from './image';
import Link from './link';
import Carousel from './carousel';

const WorkModal = ({ work, isOpen, setOpen }) => {
    return (
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
                <span />
            </FocusOnce>
            <ModalHeader>{work.title}</ModalHeader>
            <ModalBody $style={{ flex: '1' }}>
                <Block maxWidth="800px" margin="0 auto" paddingBottom="2rem">
                    {documentToReactComponents(work.body.json)}
                </Block>

                {/* <Debug title="skills" data={work.skills} />
                <Debug title="images" data={work.images} />
                <Debug title="links" data={work.links} /> */}

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
                        onClick={() => setOpen(false)}
                        $style={{ width: '100%' }}
                    >
                        Close
                    </Button>
                </Block>
            </Block>
        </Modal>
    );
};

export default WorkModal;
