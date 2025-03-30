import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";

export async function initProject() {
  console.log(chalk.blue("\n🔧 Setting up Perfactus in your project...\n"));

  // Ensure `components/ui` folder exists
  await fs.ensureDir(path.join(process.cwd(), "components/ui"));

  // Detect CSS file
  const possibleCSSFiles = ["styles/globals.css", "src/styles/globals.css"];
  let cssFile = possibleCSSFiles.find((file) => fs.existsSync(path.join(process.cwd(), file)));

  if (!cssFile) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "cssFile",
        message: "Couldn't find your global CSS file. Please enter the path manually:",
        default: "styles/globals.css",
      },
    ]);
    cssFile = answers.cssFile;
  }

  // Save config
  const configPath = path.join(process.cwd(), "perfactus.config.json");
  fs.writeJsonSync(configPath, { cssFile }, { spaces: 2 });

  console.log(chalk.green(`✅ Perfactus initialized! Config saved in ${configPath}`));
}
