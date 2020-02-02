import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    label {
        flex: 1;
        font-weight: bold;
        &::after {
            color: red;
            content: ' *';
            opacity: ${props => (props.required ? 1 : 0)};
        }
    }
    input,
    select,
    textarea {
        flex: 1;
        font-family: 'Ubuntu Mono', monospace;
        font-size: 1em;
        margin: 0.5rem 0 1rem;
        border: 2px solid #999;
        padding: 0.25rem;
    }
    textarea {
        min-height: 100px;
    }
`;

const Input = ({
    required,
    name,
    title,
    type = 'text',
    options,
    onChange,
    value,
}) => {
    const handleChange = event => {
        onChange(name, event.target.value);
    };

    const handleCheckboxChange = event => {
        onChange(name, event.target.checked || '');
    };

    const InputWrap = type === 'honeypot' ? styled(StyledInput)`
        position: fixed;
        opacity: 0;
        pointer-events: none;
    ` : type === 'checkbox' ? styled(StyledInput)`
        flex-direction: row;
        input {
            flex: 0;
            order: -1;
            margin-top: 0.125rem;
            margin-right: 0.5rem;
        }
    ` : StyledInput;

    return (
        type === 'hidden' ?
            <input
                type="hidden"
                id={name}
                name={name}
                value={value || ''}
            />
        : <InputWrap required={required}>
            <label htmlFor={name}>{title || name}</label>
            {type === 'dropdown' && (
                <select
                    id={name}
                    name={name}
                    value={value || ''}
                    onChange={handleChange}
                    required={required}
                >
                    {[
                        ['', '--Please Select--'],
                        ...(options ? options : []),
                    ].map(([value, label], i) => (
                        <option key={i} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            )}

            {type === 'checkbox' && (
                <input
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={value || false}
                    onChange={handleCheckboxChange}
                    required={required}
                />
            )}

            {type === 'textarea' && (
                <textarea
                    id={name}
                    name={name}
                    value={value || ''}
                    onChange={handleChange}
                    required={required}
                />
            )}

            {(type === 'text' || type === 'honeypot') && (
                <input
                    id={name}
                    name={name}
                    value={value || ''}
                    onChange={handleChange}
                    required={required}
                />
            )}
        </InputWrap>
    );
};

export default Input;
