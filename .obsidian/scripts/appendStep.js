module.exports = async (tp) => {
  const step = await tp.system.prompt("🧪 Enter additional step:");

  // Read current file
  let file = tp.file.content;
  
  // Append step under Approaches section
  const updated = file.replace(
    /## 🧪 Approaches\s*([\s\S]*?)(\n##|$)/,
    (match, steps, nextHeader) => {
      return `## 🧪 Approaches\n${steps}- ${step}\n${nextHeader}`;
    }
  );

  // Write updated content
  await app.vault.modify(tp.file, updated);
};
