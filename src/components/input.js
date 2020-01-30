import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    label {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.25rem 0.5rem;
        margin-right: 0.5rem;
        text-align: right;
        flex: 1;

        &::after {
            color: red;
            content: ' *';
            opacity: ${props => (props.required ? 1 : 0)};
        }
    }

    input,
    select {
        flex: 3;
        font-family: 'Ubuntu Mono', monospace;
        font-size: 1em;
    }

    div {
        flex: 3;
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
                <div className="checkbox-wrap">
                    <input
                        type="checkbox"
                        id={name}
                        name={name}
                        checked={value || false}
                        onChange={handleCheckboxChange}
                        required={required}
                    />
                </div>
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
