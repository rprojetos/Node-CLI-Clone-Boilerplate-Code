import path from 'path';
import fs from 'node:fs';
import shellJs from 'shelljs';
import { EChoicesBoilerplate } from '../enum/choices-boilerplate.enum';
import { IAnswers } from '../interface/answers.interface';
import { EGitName } from '../enum/git-name-enum';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerplate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName);
          break;
        case EChoicesBoilerplate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _execPath(gitName: string, folderName: string) {
    try {
      shellJs.cd(path.resolve());
      shellJs.exec(`git clone git@github.com:rprojetos/${gitName}`);
      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`
        );
      console.log('Arquivo criado com Sucesso!');
      shellJs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();
