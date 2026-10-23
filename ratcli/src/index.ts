#! /usr/bin/env bun

import fs from "fs/promises";

const args = process.argv.splice(2) as string[];

async function readData() {
  const data = await fs.readFile(args[0] as string, "utf-8");
  return data;
}

console.log(await readData());