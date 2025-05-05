<%*
const date = tp.date.now("YYYY-MM-DD");
const time = tp.date.now("HH:mm");

// Get user inputs
let title = await tp.system.prompt("🪲 Bug / Issue Title?");
const module = await tp.system.prompt("📦 Module / Area?");
const environment = await tp.system.suggester(
  ["Dev", "QA", "Staging", "Production"],
  ["Dev", "QA", "Staging", "Production"]
);
const priority = await tp.system.suggester(
  ["Low", "Medium", "High", "Critical"],
  ["Low", "Medium", "High", "Critical"]
);
const description = await tp.system.prompt("📝 What is the issue?");
const steps = await tp.system.prompt("🧪 Steps or Approaches tried?");
const solution = await tp.system.prompt("✅ Final Solution?");
const summary = await tp.system.prompt("🧾 Summary or Notes?");

// Check if file with title exists, if yes add number suffix
let baseTitle = title;
let count = 1;
while (await app.vault.getAbstractFileByPath(tp.file.find_tfile(`${title}.md`)?.path)) {
  title = `${baseTitle} ${count}`;
  count++;
}

// Rename file
await tp.file.rename(title);

// Generate YAML frontmatter
tR += `---\n`;
tR += `title: "${title}"\n`;
tR += `date: ${date}\n`;
tR += `time: ${time}\n`;
tR += `module: ${module}\n`;
tR += `environment: ${environment}\n`;
tR += `priority: ${priority}\n`;
tR += `tags: [bug]\n`;
tR += `---\n\n`;

// Add content in bullet point format
tR += `## 📝 What is the issue?\n- ${description}\n\n`;
tR += `## 🧪 Approaches\n- ${steps}\n\n`;
tR += `## ✅ Solution\n- ${solution}\n\n`;
tR += `## 🧾 Summary / Notes\n- ${summary}\n\n`;

// Add the dynamic button to run the append step template
tR += `\`\`\`button\n`;
tR += `name Add Another Step\n`;
tR += `type template\n`;
tR += `template Run Append Step\n`;
tR += `\`\`\`\n`;
%>
