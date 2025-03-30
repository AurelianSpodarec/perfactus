#!/usr/bin/env node

import { addComponent } from "./src/addComponent.js";
import { initProject } from "./src/initProject.js";

const args = process.argv.slice(2);

if (args[0] === "add") {
  addComponent(args[1]);
} else if (args[0] === "init") {
  initProject();
} else {
  console.log("Usage: npx perfactus add [component]");
}
