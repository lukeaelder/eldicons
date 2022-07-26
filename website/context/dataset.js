import tags from './tags.json';
import * as Icons from '../components/icons/index.js';

const dataset = [];

for (let icon in Icons) {
  const kebabCase = icon.replace(
    /[A-Z0-9]/g,
    (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()
  );
  dataset.push({
    name: kebabCase,
    svg: Icons[icon],
    ...tags[kebabCase],
  });
}

export default dataset;
