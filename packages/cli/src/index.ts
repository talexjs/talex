#! /usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import {} from 'node';
const program = new Command();
// 配置帮助信息
program.on('--help', () => {
  console.log(`\r\n Run ${chalk.green(`dyi <command> --help`)} to understand the details\r\n `);
});
program.parse(process.argv);
