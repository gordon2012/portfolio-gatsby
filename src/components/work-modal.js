import React from 'react';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
// import { Modal, ModalHeader, ModalBody, FocusOnce } from 'baseui/modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Image from './image';
import Link from './link';
import Carousel from './carousel';

import styled from 'styled-components';


// modal
import { createPortal } from 'react-dom';
const Modal = ({ children }) => {
    React.useLayoutEffect(() => {
        const {overflow, paddingRight} = window.getComputedStyle(document.body);
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';

        return () => {
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
        };
    }, []);

    const Container = styled.div`
        /* border: 3px solid red; */

        z-index: 999;

        position: fixed;

        top: 0;
        left: 0;
        /* width: 100vw; */

        width: 100%;

        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);

    `;

    const Content = styled.div`
        /* border: 3px solid lime; */

        width: 80%;
        height: 90%;
        /* border: 1px solid #d8dce3;
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
        background-color: #fdfdfe; */

        background: white;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

        padding: 1rem;


    `;

    return createPortal(
        <Container role="dialog" aria-modal="true">
            <Content>
                {children}
            </Content>
        </Container>,
        document.body
    );
};

const WorkModal = ({ work, isOpen, setOpen }) => {
    return (
        isOpen && <Modal>
            <h1>TITLE</h1>

            <div>


            </div>

            <button onClick={() => setOpen(false)}>close</button>
        </Modal>
        // <Modal
        //     size="auto"
        //     onClose={() => setOpen(false)}
        //     isOpen={isOpen}
        //     display="flex"
        //     flexDirection="column"
        //     overrides={{
        //         Root: {
        //             style: {
        //                 paddingTop: '1rem',
        //                 paddingRight: '10vw',
        //                 paddingBottom: '1rem',
        //                 paddingLeft: '10vw',
        //             },
        //         },
        //         Dialog: {
        //             style: {
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 width: '100%',
        //             },
        //         },
        //     }}
        // >
        //     <FocusOnce>
        //         <span />
        //     </FocusOnce>
        //     <ModalHeader>{work.title}</ModalHeader>
        //     <ModalBody $style={{ flex: '1' }}>
        //         <Block maxWidth="800px" margin="0 auto" paddingBottom="2rem">
        //             {documentToReactComponents(work.body.json)}
        //         </Block>
        //         {work.images.length > 1 ? (
        //             <Block maxWidth="800px" margin="0 auto">
        //                 <Carousel images={work.images} />
        //             </Block>
        //         ) : (
        //             <Block maxWidth="600px" margin="0 auto">
        //                 <Image
        //                     src={work.images[0].file.url}
        //                     alt={work.images[0].title}
        //                 />
        //             </Block>
        //         )}
        //     </ModalBody>
        //     <Block
        //         display={['block', 'flex']}
        //         $style={{
        //             padding: '0.75rem',
        //         }}
        //     >
        //         {work.links.map((link, i) => (
        //             <Block
        //                 key={i}
        //                 flex="1"
        //                 $style={{
        //                     padding: '0.75rem',
        //                 }}
        //             >
        //                 <Link
        //                     to={link.url}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     $style={{
        //                         color: 'white',
        //                         textDecoration: 'none',
        //                     }}
        //                 >
        //                     <Button $style={{ width: '100%' }}>
        //                         {link.title}
        //                     </Button>
        //                 </Link>
        //             </Block>
        //         ))}
        //         <Block
        //             padding="0.75rem"
        //             flex={['1', '0']}
        //             $style={{
        //                 '@media (min-width: 600px)': {
        //                     order: '-1',
        //                 },
        //             }}
        //         >
        //             <Button
        //                 onClick={() => setOpen(false)}
        //                 $style={{ width: '100%' }}
        //             >
        //                 Close
        //             </Button>
        //         </Block>
        //     </Block>
        // </Modal>
    );
};

export default WorkModal;
