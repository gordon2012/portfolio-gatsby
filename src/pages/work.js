// import 'array-flat-polyfill';
import React, { useState } from 'react';
import styled from 'styled-components';

import useContentful from '../hooks/useContentful';
import Layout from '../components/layout';
import WorkCard from '../components/work-card';
import WorkModal from '../components/work-modal';
import Tag from '../components/tag';

const Background = styled.div`
    flex: 1;
    background: #ddd;
`;

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    & > h1 {
        margin-bottom: 2rem;
        text-align: center;
        font-size: 3em;
    }
`;

const Card = styled.div`
    background: white;
    padding: 2rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    & > div {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        padding: 0.2rem;
        & > * {
            margin: 0.2rem;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 899px) {
        grid-template-columns: 1fr;
        max-width: 550px;
        margin: 0 auto;
    }
    & > h2 {
        grid-column: 1 / -1;
        margin-top: 3rem;
    }
    & > div {
        display: flex;
        flex-direction: column;
    }
`;

const WorkItem = ({ work, filter, setFilter }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <WorkCard
                work={work}
                setOpen={setOpen}
                filter={filter}
                setFilter={setFilter}
            />
            <WorkModal work={work} isOpen={isOpen} setOpen={setOpen} />
        </>
    );
};

const WorkPage = () => {
    const [filter, setFilter] = useState('');
    const {skills, categories} = useContentful();

    return (
        <Layout>
            <Background>
                <Container>
                    <h1>My Work</h1>
                    <Card>
                        <h2>Filter by Skill:</h2>
                        <div>
                            <Tag
                                kind="secondary"
                                variant={filter === '' ? 'solid' : 'outlined'}
                                onClick={filter === '' ? null : () => setFilter('')}
                            >
                                ALL
                            </Tag>
                            {skills.map(skill => (
                                <Tag
                                    key={skill}
                                    variant={filter === skill || filter === '' ? 'solid' : 'outlined'}
                                    onClick={filter === skill ? null : () => setFilter(skill)}
                                >
                                    {skill}
                                </Tag>
                            ))}
                        </div>
                    </Card>
                    {(filter
                        ? categories
                            .filter(c =>
                                c.projects.some(p =>
                                    p.skills.some(s => s === filter)
                                )
                            )
                            .map(c => ({
                                ...c,
                                projects: c.projects.filter(p =>
                                    p.skills.some(s => s === filter)
                                ),
                            }))
                        : categories
                    ).map(category => (
                        <React.Fragment key={category.name}>
                            <Grid>
                                <h2>{category.name}</h2>
                                {category.projects.map((project, i) => (
                                    <div key={i}>
                                        <WorkItem
                                            work={project}
                                            filter={filter}
                                            setFilter={setFilter}
                                        />
                                    </div>
                                ))}
                            </Grid>
                        </React.Fragment>
                    ))}
                </Container>
            </Background>
        </Layout>
    );
};

export default WorkPage;
