import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';
import camelcase from 'camelcase';
import prettier from 'prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgsJsonPath = path.join(
  __dirname,
  '../app/components/icons/svgs-to-generate.json',
);
const outputDirectory = path.join(__dirname, '../app/components/icons');
const generatedDirectory = path.join(outputDirectory, 'generated');

const convertToCamelCase = (svgContent) => {
  return svgContent.replace(/(\s)([a-z0-9-]+)=/g, (_, prefix, attrName) => {
    return `${prefix}${camelcase(attrName)}=`;
  });
};

const extractInnerSvgContent = (svgContent) => {
  const matches = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return matches ? matches[1] : svgContent;
};

const formatWithPrettier = async (code) => {
  const prettierConfigPath = path.join(__dirname, '../.prettierrc');
  const prettierConfig = fs.existsSync(prettierConfigPath)
    ? JSON.parse(fs.readFileSync(prettierConfigPath, 'utf8'))
    : {};

  return prettier.format(code, { ...prettierConfig, parser: 'typescript' });
};

const generateComponent = async (name, filePath) => {
  let svgContent = fs.readFileSync(filePath, 'utf8');

  // Optimize SVG using svgo
  const optimizedSvg = optimize(svgContent, {
    plugins: ['removeTitle', 'removeDesc'],
  }).data;

  // Convert attributes to camelCase
  const camelCasedSvg = convertToCamelCase(optimizedSvg);
  const innerSvgContent = extractInnerSvgContent(camelCasedSvg);

  const componentCode = `
import React from 'react';

interface ${name}Props extends React.SVGAttributes<SVGElement> {
  className?: string;
}

const ${name}: React.FC<${name}Props> = ({ className, ...props }) => (
  <svg className={className} {...props}>
    ${innerSvgContent}
  </svg>
);

export default ${name};
  `;
  return await formatWithPrettier(componentCode);
};

const createIndexFile = async (assets) => {
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

  const formattedIndexContent = await formatWithPrettier(indexContent);

  fs.writeFileSync(
    path.join(outputDirectory, 'index.ts'),
    formattedIndexContent,
  );
};

const main = async () => {
  const { assets } = JSON.parse(fs.readFileSync(svgsJsonPath, 'utf8'));

  if (!fs.existsSync(generatedDirectory)) {
    fs.mkdirSync(generatedDirectory, { recursive: true });
  }

  for (const [key, file] of Object.entries(assets)) {
    const componentName = key.replace(/-./g, (match) => match[1].toUpperCase());
    const pascalCaseName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const componentContent = await generateComponent(
      pascalCaseName,
      path.join(__dirname, `../app/assets/${file}`),
    );

    fs.writeFileSync(
      path.join(generatedDirectory, `${pascalCaseName}.tsx`),
      componentContent,
    );
  }

  createIndexFile(assets);

  console.log('SVG components generated successfully!');
};

main();
