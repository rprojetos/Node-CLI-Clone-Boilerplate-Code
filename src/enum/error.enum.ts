const Prefix = '>> Parâmetro Inválido: ';
const Sufix = '<< <<';

export enum EErros {
  ERROR_NULL = `${Prefix}Insirá um valor para o nome do projeto!${Sufix}`,
  ERROR_SPECIAL_CHARACTERES = `${Prefix}Não pode conter caracteres especiais${Sufix}`,
  ERROR_INIT_SPACE = `${Prefix}Não pode ter espaço em branco no inicio do nome${Sufix}`,
  ERROR_GIT_NAME = `${Prefix}Não é possível criar um diretório com esse nome!${Sufix}`,
  ERROR_INVALID_FOLDER = `${Prefix}Já existe um diretório com esse nome${Sufix}`,
}
