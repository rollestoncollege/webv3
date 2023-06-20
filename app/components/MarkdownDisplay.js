import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const MarkdownDisplay = ({ content }) => {
  const processedContent = remark().use(html).processSync(content).toString();
  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

export default MarkdownDisplay;
