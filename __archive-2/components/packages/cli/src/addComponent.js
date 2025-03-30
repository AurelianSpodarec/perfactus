import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export async function addComponent(componentName) {
  if (!componentName) {
    console.log(chalk.red("❌ Please specify a component: e.g., npx perfactus add button"));
    return;
  }

  const srcFolderPath = path.join(process.cwd(), `../../packages/ui/src/components/${componentName}`);
  const srcFilePath = path.join(process.cwd(), `../../packages/ui/src/components/${componentName}.tsx`);

  const destPath = path.join(process.cwd(), `components/ui`);

  const folderExists = await fs.pathExists(srcFolderPath);
  const fileExists = await fs.pathExists(srcFilePath);

  if (folderExists) {
      await fs.copy(srcFolderPath, path.join(destPath, componentName));
      console.log(chalk.green(`✅ Component folder "${componentName}" added successfully to ${destPath}`));
  } else if (fileExists) {
      await fs.copyFile(srcFilePath, path.join(destPath, `${componentName}.tsx`));
      console.log(chalk.green(`✅ Component file "${componentName}.tsx" added successfully to ${destPath}`));
  } else {
      console.log(chalk.red(`❌ Component "${componentName}" not found as a folder or file.`));
  }
}

// function injectCSS(componentName) {
//   const cssPath = path.join(process.cwd(), "styles", "globals.css");

//   if (!fs.existsSync(cssPath)) {
//     console.log(chalk.yellow("⚠️ Could not find styles/globals.css. Skipping CSS injection."));
//     return;
//   }

//   const cssVariables = `\n/* ${componentName} styles */\n:root {\n  --${componentName}-bg: #007bff;\n}`;

//   fs.appendFileSync(cssPath, cssVariables);
//   console.log(chalk.green("✅ CSS variables injected into styles/globals.css"));
// }
