import { remark } from 'remark';
import html from 'remark-html';

export default function Markdown({ content }) {
    const processedContent = remark().use(html).processSync(content).toString();
    return <div id="md" dangerouslySetInnerHTML={{ __html: processedContent }} />;
}
