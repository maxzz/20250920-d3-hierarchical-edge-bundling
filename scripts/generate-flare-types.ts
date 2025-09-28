import JsonToTS from 'json-to-ts';
import fs from 'fs';
import path from 'path';

// Read the flare.json file
const flareJsonPath = path.join(__dirname, '../apps/web/src/components/2-edge-big/data/flare.json');
const flareData = JSON.parse(fs.readFileSync(flareJsonPath, 'utf-8'));

// Generate TypeScript interfaces
const interfaces = JsonToTS(flareData[0], {
    rootName: 'FlareDataItem'
});

// Write the generated types to a file
const outputPath = path.join(__dirname, '../apps/web/src/components/2-edge-big/generated-flare-types.ts');
const generatedContent = interfaces.join('\n\n');

fs.writeFileSync(outputPath, `// Auto-generated types from flare.json
// Run 'pnpm generate-flare-types' to regenerate

${generatedContent}

export type FlareData = FlareDataItem[];
`);

console.log('✅ Generated flare types at:', outputPath);