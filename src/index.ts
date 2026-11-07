import Tag from './Tag.js';

type FormOptions = {
  url?: string;
};

type FormCallback = (form: unknown) => void;

export default class HexletCode {
  static formFor(
    template: Record<string, string>,
    options: FormOptions,
    callback: FormCallback,
  ): string {
    void template;
    void callback;

    return new Tag('form', { action: options.url ?? '#', method: 'post' }).toString();
  }
}
