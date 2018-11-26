import { Markdown } from 'components/markdown_parser';
import * as React from 'react';

export class BlogItem extends React.Component {
    render() {
        return (
            <Markdown
                markdownString={`
                    # Header

                    \`\`\`javascript
                        const a = '13';
                    \`\`\`
                `}
            />
        );
    }
}