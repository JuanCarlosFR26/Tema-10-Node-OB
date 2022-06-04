import { suma, multiplica} from './module/controller.js';
import chalk from 'chalk';

const log = console.log;

let suma1 = suma(1,2);
let suma2 = suma(4,5);
let multiplicaTotal = multiplica(suma1,suma2);

log(chalk.green.bold(multiplicaTotal));