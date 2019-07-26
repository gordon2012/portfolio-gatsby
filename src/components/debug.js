import React from 'react';
import { Card } from 'baseui/card';

const Debug = ({ title = 'data', tabsize = 2, data = [] }) => (
    <Card $style={{ marginBottom: '1rem' }}>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            <code>
                {title && `${title} = `}
                {JSON.stringify(data, null, tabsize)}
            </code>
        </pre>
    </Card>
);

export default Debug;
