import yaml from './vendor/js-yaml.js'; 
import './vendor/marked.min.js';


export function extractYamlFrontMatter(inputString) {
    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = inputString.match(frontMatterRegex);
    if (match) {
        // Parse the YAML front matter
        const yamlContent = match[1];
        try {
            return yaml.load(yamlContent);  // Parse YAML content and return as an object
        } catch (e) {
            console.error("Failed to parse YAML front matter:", e);
            return null;
        }
    }
    return {};
}

export function removeYamlFrontMatter(inputString) {
    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
    return inputString.replace(frontMatterRegex, '').trim();
}

const variablePattern = /\$[a-zA-Z_][a-zA-Z0-9_-]*/g;

function replaceVariables(str, attributes) {
  return str.replace(variablePattern, (match) => {
    const varName = match.substring(1);
    return attributes[varName] || match;
  });
}


export async function parseDataroomMarkup(content, attributes = {}) {
  const data = extractYamlFrontMatter(content);
  const template_without_yaml = removeYamlFrontMatter(content);
  const new_value = replaceVariables(template_without_yaml, data)
  const renderedContent = marked.parse(new_value);
  return {data:data, html: renderedContent};
}

