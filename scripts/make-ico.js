const fs = require('fs');
const path = require('path');

const pngPath = path.join(__dirname, '../public/icon-32.png');
const pngBuffer = fs.readFileSync(pngPath);

// ICO Header: 6 bytes
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // Reserved
header.writeUInt16LE(1, 2); // 1 = ICO
header.writeUInt16LE(1, 4); // 1 image

// ICO Directory Entry: 16 bytes
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // Width
entry.writeUInt8(32, 1); // Height
entry.writeUInt8(0, 2);  // Colors (0 = >= 256)
entry.writeUInt8(0, 3);  // Reserved
entry.writeUInt16LE(1, 4); // Color planes
entry.writeUInt16LE(32, 6); // Bits per pixel
entry.writeUInt32LE(pngBuffer.length, 8); // Image size in bytes
entry.writeUInt32LE(22, 12); // Offset to image data (6 + 16 = 22)

const icoBuffer = Buffer.concat([header, entry, pngBuffer]);

fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), icoBuffer);

console.log('favicon.ico successfully generated at public/favicon.ico and app/favicon.ico');
