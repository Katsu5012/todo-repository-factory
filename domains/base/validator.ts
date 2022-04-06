export class Validator {
  /**文字数を数える  */
  countWordLength(value: string): number {
    return value.length;
  }
  /** 最小文字数チェック */
  minLength(value: string, min: number) {
    if (!value) return;

    if (this.countWordLength(value) > min) {
      throw new Error(`文字数が${min}文字以上ではありません。`);
    }
  }

  /** 最大文字数チェック */
  maxLength(value: string, max: number) {
    if (!value) return;

    if (this.countWordLength(value) > max) {
      throw new Error(`文字数が${max}文字以下ではありません。`);
    }
  }
}
