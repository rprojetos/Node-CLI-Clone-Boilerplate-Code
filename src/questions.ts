import path from 'node:path';
import fs from 'node:fs';
import { EChoicesBoilerplate } from './enum/choices-boilerplate.enum';
import { EErros } from './enum/error.enum';
import { EGitName } from './enum/git-name-enum';

const loadQuestionsChoice = (): string[] => {
  const arrChoicesBoilerplate: string[] = [];
  Object.values(EChoicesBoilerplate).forEach((value) => {
    arrChoicesBoilerplate.push(value);
  });
  return arrChoicesBoilerplate;
};

const folderNameValidator = async (folderName: string) => {
  // folderName - Não pode ser Null
  if (!folderName) return EErros.ERROR_NULL;
  // não podemos ter caracteres especiais, execeto [- , _ ' ']
  if (/[^\w\s-_]/.test(folderName)) return EErros.ERROR_SPECIAL_CHARACTERES;
  // não pode conter espaço no inicio do nome
  if (/^\s/.test(folderName)) return EErros.ERROR_INIT_SPACE;
  // não pode existir diretório com o mesmo nome da repo do github
  if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS)
    return EErros.ERROR_GIT_NAME;
  // não pode existir o mesmo nome do folderName
  try {
    const dir = path.resolve(folderName);
    fs.accessSync(dir, fs.constants.R_OK);
    return EErros.ERROR_INVALID_FOLDER;
  } catch (err) {
    null;
  }
  return true;
};

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual será o Boilerplate a ser criado? Escolha a seguir:',
    choices: loadQuestionsChoice(),
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual será o nome do diretório do projeto?',
    validate: folderNameValidator,
  },
];
