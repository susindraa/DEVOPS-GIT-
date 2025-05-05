<%*
async function run() {
  let text = tp.file.content;

  // Split content into lines
  let lines = text.split('\n');

  // Add bullets to lines that are not already bulleted or formatted
  let processedLines = lines.map(line => {
    let trimmed = line.trim();
    if (trimmed === '') return ''; // Keep blank lines
    if (/^[-*>#]/.test(trimmed)) return line; // Already formatted
    return '- ' + trimmed; // Add bullet
  });

  // Collapse multiple blank lines into one
  let finalText = processedLines.join('\n').replace(/\n{2,}/g, '\n');

  // Overwrite note
  await tp.file.overwrite(finalText);
}
run();
%>
