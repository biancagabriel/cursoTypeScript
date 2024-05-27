/*
os módulos em JS ou TS é uma forma de compartilhar informações entre arquivos, todos os arquivos que realizarem a importação
desse módulo poderão utilizar e usufruir das funções ou informações que forem expostas.

import: importa informações de uma class, namespace, let, const...
export: exporta para outras pessoas consumirem informações
*/

import { Pessoa1 } from "./pessoa1";
import { Pessoa } from "./namespace-aninhados";

export {Pessoa, Pessoa1}