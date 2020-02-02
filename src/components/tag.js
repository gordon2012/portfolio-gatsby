import styled from 'styled-components';

const Tag = styled.button`
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 0.9em;

    ${({ kind, variant, onClick }) => {
        const color = kind === 'secondary' ? '#276ef1' : '#e54937';
        return (`
            background: ${variant === 'outlined' ? 'white' : color};
            border: 2px solid ${color};
            color: ${variant === 'outlined' ? color : 'white'};
            cursor: ${onClick ? 'pointer' : 'inherit'};
            &:hover {
                background: ${onClick ? variant === 'outlined' ? color : 'white' : color};
                color: ${onClick ? variant === 'outlined' ? 'white' : color : 'white'}
            }
        `);
    }}
`;

export default Tag;