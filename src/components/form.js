import React from 'react';

const Form = ({ blank, children, onSubmit, data, ...restProps }) => {
    let elements = React.Children.toArray(children);

    const [input, setRawInput] = React.useState(
        blank
            ? elements
                  .filter(e => e.props.name)
                  .map(e => e.props.name)
                  .reduce((a, c) => ({ ...a, [c]: '' }), {})
            : {}
    );

    const setInput = (name, value) => {
        if (blank) {
            setRawInput(prevState => ({ ...prevState, [name]: value }));
        } else {
            if (value) {
                setRawInput(prevState => ({ ...prevState, [name]: value }));
            } else {
                setRawInput(prevState => {
                    const { [name]: __, ...newState } = prevState;
                    return newState;
                });
            }
        }
    };

    const defaults = [];
    elements.filter(ele => ele.props.name).forEach(ele => {
        if(ele.props.value) {
            defaults.push([ele.props.name, ele.props.value]);
        }
    });
    React.useEffect(() => {
        defaults.forEach(([name, value]) => setInput(name, value));
    }, []);

    elements = elements.map((ele, i) => {
        if (ele.props.name) {
            return React.cloneElement(ele, {
                onChange: setInput,
                value: input[ele.props.name],
            });
        } else if (ele.props.type === 'reset') {
            return React.cloneElement(ele, {
                onClick: () => setRawInput({}),
            });
        } else {
            return ele;
        }
    });

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ ...data, ...input });
        setRawInput(
            blank
                ? elements
                      .filter(e => e.props.name)
                      .map(e => e.props.name)
                      .reduce((a, c) => ({ ...a, [c]: '' }), {})
                : {}
        );
    };

    return (
        <form onSubmit={handleSubmit} {...restProps}>
            {elements}
        </form>
    );
};

export default Form;
