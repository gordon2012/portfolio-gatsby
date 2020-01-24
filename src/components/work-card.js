import React from 'react';
// import { Card } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag } from 'baseui/tag';
import Search from 'baseui/icon/search';

import Image from './image';

import styled from 'styled-components';

const Card = styled.div`
    background: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

    flex: 1;
    display: flex;
    flex-direction: column;

    & > div:first-child {
        /* border: 3px solid red; */

        padding: 1rem;
    }

    & > div:nth-child(2) {
        /* border: 3px solid lime; */

        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & > div:last-child {
        /* border: 3px solid magenta; */

        padding: 1rem;
    }
`;

// TODO: DRY Tag
const WorkCard = ({ work, setOpen, filter, setFilter }) => {
    return (
        <Card>
            <div>
                <h2>{work.title}</h2>
                {work.skills.map(skill => (
                    <button key={skill}>{skill}</button>
                ))}
            </div>
            <div>
                <Image src={work.images[0].file.url}/>
            </div>
            <div>
                <button>search</button>
            </div>
        </Card>

        // <Card
        //     overrides={{
        //         Contents: {
        //             style: {
        //                 marginTop: '0',
        //                 marginRight: '0',
        //                 marginBottom: '0',
        //                 marginLeft: '0',
        //                 height: '100%',
        //                 display: 'flex',
        //             },
        //         },
        //         Body: {
        //             style: {
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //             },
        //         },
        //     }}
        // >
        //     <Block
        //         paddingBottom="0.5rem"
        //         $style={{
        //             textAlign: 'center',
        //             backgroundColor: '#333',
        //             borderBottom: '1px solid white',
        //         }}
        //     >
        //         <T.H5 color="white" margin="0" padding="1rem 0">
        //             {work.title}
        //         </T.H5>
        //         {work.skills.map(skill => (
        //             <Tag
        //                 key={skill}
        //                 closeable={false}
        //                 kind="negative"
        //                 variant="solid"
        //                 variant={
        //                     filter === skill || filter === ''
        //                         ? 'solid'
        //                         : 'light'
        //                 }
        //                 onClick={
        //                     filter === skill ? null : () => setFilter(skill)
        //                 }
        //             >
        //                 {skill}
        //             </Tag>
        //         ))}
        //     </Block>
        //     <Block
        //         padding="0.5rem"
        //         flex="1"
        //         display="flex"
        //         flexDirection="column"
        //         justifyContent="center"
        //     >
        //         <Image src={work.images[0].file.url} />
        //     </Block>
        //     <Block padding="0" marginBottom="-16px">
        //         <Button
        //             kind="minimal"
        //             $style={{
        //                 width: '100%',
        //                 color: '#333',
        //             }}
        //             onClick={() => setOpen(s => !s)}
        //         >
        //             <Search size={36} title="View" />
        //         </Button>
        //     </Block>
        // </Card>
    );
};

export default WorkCard;
