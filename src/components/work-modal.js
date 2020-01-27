import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Image from './image';
import Link from './link';
import Carousel from './carousel';

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
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    `;

    const Content = styled.div`
        width: 80%;
        min-height: 90%;
        background: white;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        & > div:nth-child(2) {
            flex: 1;
        }
        & > div:last-child {
            display: flex;
            @media (max-width: 599px) {
                display: block;
            }
            div {
                padding: 1rem;
                flex: 1;
                button {
                    width: 100%;
                    cursor: pointer;
                    padding: 1rem;
                    font-weight: bold;
                    font-size: 1.2em;
                    border: 3px solid #276ef1;
                    background: transparent;
                    color: #276ef1;
                    :hover {
                        background: #276ef1;
                        color: white;
                    }
                }
            }
            div:last-child {
                order: -1;
                flex: 0;
                button {
                    border: 3px solid #e54937;
                    color: #e54937;
                    :hover {
                        background: #e54937;
                        color: white;
                    }
                }
            }
        }
        h1 {
            text-align: center;
        }
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

const Container = styled.div`
    max-width: ${props => props.width};
    margin: 0 auto;
`;

const WorkModal = ({ work, isOpen, setOpen }) => {
    return (
        isOpen && <Modal>
            <div>
                <h1>{work.title}</h1>
            </div>
            <Container width="800px">
                {documentToReactComponents(work.body.json)}
                <br />
                {work.images.length > 1 ? (
                    <Carousel images={work.images}/>
                ) : (
                    <Container width="600px">
                        <Image
                            src={work.images[0].file.url}
                            alt={work.images[0].title}
                        />
                    </Container>
                )}
                <br />
            </Container>
            <div>
                {work.links.map((link, i) => (
                    <div key={i}>
                        <Link to={link.url} target="_blank" rel="noreferer noopener">
                            <button>{link.title}</button>
                        </Link>
                    </div>
                ))}
                <div>
                    <button onClick={() => setOpen(false)}>Close</button>
                </div>
            </div>
        </Modal>
    );
};

export default WorkModal;
