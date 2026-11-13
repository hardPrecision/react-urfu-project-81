import Form from './Form.js';
import Tag from './Tag.js';

type FormOptions = {
  url?: string;
  method?: string;
};

type FormCallback = (form: Form) => void;

export default class HexletCode {
  static formFor(
    template: Record<string, string>,
    options: FormOptions,
    callback: FormCallback,
  ): string {
    const form = new Form(template);
    callback(form);

    return new Tag('form', {
      method: options.method ?? 'post',
      action: options.url ?? '#',
    }, form.toString()).toString();
  }
}
