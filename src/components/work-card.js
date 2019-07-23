import React from 'react';

import { Card } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag } from 'baseui/tag';
import Search from 'baseui/icon/search';
import { styled } from 'baseui';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    FocusOnce,
} from 'baseui/modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Image = styled('img', {});

const Debug = ({ title, tabsize = 2, children }) => (
    <Card $style={{ marginBottom: '1rem' }}>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
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
                    <Image
                        src={work.images[0].file.url}
                        $style={{
                            objectFit: 'contain',
                            maxWidth: '100%',
                            display: 'block',
                        }}
                    />
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

            <Modal size="full" onClose={() => setOpen(false)} isOpen={isOpen}>
                <FocusOnce>
                    <ModalHeader>{work.title}</ModalHeader>
                </FocusOnce>
                <ModalBody>
                    {documentToReactComponents(work.body.json)}

                    <Debug title="skills">{work.skills}</Debug>
                    <Debug title="images">{work.images}</Debug>
                    <Debug title="links">{work.links}</Debug>
                </ModalBody>
                <ModalFooter>
                    <ModalButton onClick={() => setOpen(false)}>
                        Close
                    </ModalButton>
                    <ModalButton autoFocus onClick={() => setOpen(false)}>
                        Confirm
                    </ModalButton>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default WorkCard;
