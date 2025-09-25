import fs from 'fs';
import path from 'path';

const folder = process.argv[2] || '.';

function getEnvFiles(dir: string): string[] {
    const files: string[] = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
        if (item === 'node_modules') continue;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            files.push(...getEnvFiles(fullPath));
        } else if (item === '.env') {
            files.push(fullPath);
        }
    }
    return files;
}

const envFiles = getEnvFiles(folder);

const date = new Date();
const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}.${String(date.getFullYear()).slice(-2)}`;

for (const file of envFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    const updatedLines = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return line;
        const [key, ...valueParts] = trimmed.split('=');
        const value = valueParts.join('=');
        if (key.includes('_MODIFIED')) {
            return `${key}=${formattedDate}`;
        } else if (key.includes('_BUILD')) {
            const num = parseInt(value);
            if (!isNaN(num)) {
                return `${key}=${num + 1}`;
            }
        }
        return line;
    });
    const updatedContent = updatedLines.join('\n');
    fs.writeFileSync(file, updatedContent);
}

console.log('Updated .env files:', envFiles);