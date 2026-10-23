#! /usr/bin/env bun

import readline from "node:readline";

function runRoulette() {
  let current = 1;
  const bullet = Math.floor(Math.random() * (8 - 1 - 1)) + 1;

  while (1) {
    prompt("fire");
    console.log(bullet, current);
    if (current === bullet) {
      console.log("you died!");
      return;
    } else if (current === 5) {
      console.log("you survived");
      return;
    }
    current++;
  }
}

runRoulette();
