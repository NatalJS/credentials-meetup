import qs from 'querystring';

function removeEmptyValue(object) {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (!value.length) {
      return acc;
    }

    return { [key]: value };
  }, {});
}

function parseQueryString(query) {
  if (!query) return '';

  return `?${qs.stringify(removeEmptyValue(query))}`;
}

export default parseQueryString;
