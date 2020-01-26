import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from './image';
import Tag from './tag';

const Card = styled.div`
    background: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    flex: 1;
    display: flex;
    flex-direction: column;
    & > div:first-child {
        text-align: center;
        background-color: #333;
        color: white;
        padding: 1rem;
        padding-bottom: 0.5rem;
    }
    & > div:nth-child(2) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    padding: 0.2rem;
    & > * {
        margin: 0.2rem;
    }
`;

const Button = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    border: none;
    background: white;
    :hover {
        background: #eee;
    }
`;

const WorkCard = ({ work, setOpen, filter, setFilter }) => {
    return (
        <Card>
            <div>
                <h2>{work.title}</h2>
                <Tags>
                    {work.skills.map(skill => (
                        <Tag
                            key={skill}
                            variant={filter === skill || filter === '' ? 'solid' : 'outlined'}
                            onClick={filter === skill ? null : () => setFilter(skill)}
                        >
                            {skill}
                        </Tag>
                    ))}
                </Tags>
            </div>
            <div>
                <Image src={work.images[0].file.url}/>
            </div>
            <div>
                <Button onClick={() => setOpen(s => !s)}>
                    <FontAwesomeIcon
                        icon={['fas', 'search']}
                        size="2x"
                    />
                </Button>
            </div>
        </Card>
    );
};

export default WorkCard;
