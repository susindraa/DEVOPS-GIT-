// appendStep.js
async function appendStep(tp) {
    try {
        const step = await tp.system.prompt("🧪 Enter additional step");
        if (!step) return "❌ No step provided.";

        let content = tp.file.content;

        // Improved regex to capture the Approaches section
        const approachesRegex = /## 🧪 Approaches\s*\n(?:- .+\n?)*/;

        if (content.match(approachesRegex)) {
            // Append new step
            content = content.replace(approachesRegex, (match) => match + `- ${step}\n`);
        } else {
            // Fallback: Add Approaches section if missing
            content = `## 🧪 Approaches\n- ${step}\n\n` + content;
        }

        await app.vault.modify(tp.file, content);
        return `✅ Step added: "${step}"`;
    } catch (error) {
        console.error("Error in appendStep:", error);
        return `❌ Error: ${error.message}`;
    }
}

module.exports = appendStep;