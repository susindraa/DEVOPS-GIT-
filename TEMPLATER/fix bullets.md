<%*
let text = await tp.system.clipboard(); // or use tp.file.content for full note

let lines = text.split('\n');

let processedLines = lines.map(line => {
  let trimmed = line.trim();
  if (trimmed === '') return ''; // keep blank lines
  if (/^[-*>#|]/.test(trimmed)) return line; // skip already formatted lines or table rows
  return '- ' + trimmed; // add bullet
});

// Collapse multiple blank lines
let finalText = processedLines.join('\n').replace(/\n{2,}/g, '\n');

tR = finalText;
%>
