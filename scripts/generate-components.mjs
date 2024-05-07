// scripts/generate-components.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgsJsonPath = path.join(
  __dirname,
  '../app/components/icons/svgs-to-generate.json',
);
const outputDirectory = path.join(__dirname, '../app/components/icons');

// Adjust this function to include the className prop
const generateComponent = (name, filePath) => `
import React from 'react';

interface ${name}Props extends React.SVGAttributes<SVGElement> {
  className?: string;
}

const ${name}: React.FC<${name}Props> = ({ className, ...props }) => (
  <svg className={className} {...props}>
    ${fs.readFileSync(filePath, 'utf8')}
  </svg>
);

export default ${name};
`;

const createIndexFile = (assets) => {
  const indexContent = Object.keys(assets)
    .map((key) => {
      const componentName = key.replace(/-./g, (match) =>
        match[1].toUpperCase(),
      );
      const pascalCaseName =
        componentName.charAt(0).toUpperCase() + componentName.slice(1);
      return `export { default as ${pascalCaseName} } from './generated/${pascalCaseName}';`;
    })
    .join('\n');

  fs.writeFileSync(path.join(outputDirectory, 'index.ts'), indexContent);
};

const main = () => {
  const { assets } = JSON.parse(fs.readFileSync(svgsJsonPath, 'utf8'));

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  Object.entries(assets).forEach(([key, file]) => {
    const componentName = key.replace(/-./g, (match) => match[1].toUpperCase());
    const pascalCaseName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const componentContent = generateComponent(
      pascalCaseName,
      path.join(__dirname, file),
    );
    fs.writeFileSync(
      path.join(outputDirectory, `/generated/${pascalCaseName}.tsx`),
      componentContent,
    );
  });

  createIndexFile(assets);

  console.log('SVG components generated successfully!');
};

main();
