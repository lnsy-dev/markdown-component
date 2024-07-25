const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

//Function to detect and extract JSON from a string
export const extractJSONAndNonJSON = (str) => {
  // Regular expression to match JSON-like patterns in the string
  const jsonMatches = str.match(/\{(?:[^{}]*|{"(?:[^{}]*|{"[^{}]*"})*"})*\}/g);
  // Filter out valid JSON strings from the matches
  const validJSONs = jsonMatches ? jsonMatches.filter(isValidJSON).map(JSON.parse) : [];
  // Find and extract non-JSON parts of the string
  let nonJSONParts = str;
  if (jsonMatches) {
    jsonMatches.forEach(match => {
      nonJSONParts = nonJSONParts.replace(match, '');
    });
  }
  // Removing extra spaces created by replacements
  nonJSONParts = nonJSONParts.replace(/\s+/g, ' ').trim();
  // Return both JSON objects and non-JSON parts
  return { validJSONs, nonJSONParts };
};

//Example usage
const exampleString = 'blerg {"key1": "value1"} more gerger text {"key2": "value2"}';
const { validJSONs, nonJSONParts } = extractJSONAndNonJSON(exampleString);
console.log('Extracted JSON:', validJSONs);
console.log('Non-JSON Parts:', nonJSONParts);