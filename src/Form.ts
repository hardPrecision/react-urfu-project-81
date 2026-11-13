import Tag from './Tag.js';

type AttributeValue = string | number;
type InputOptions = Record<string, AttributeValue> & { as?: string };

export default class Form {
  private fields: string[] = [];

  constructor(private template: Record<string, string>) {}

  input(name: string, options: InputOptions = {}): void {
    if (!Object.hasOwn(this.template, name)) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }

    const label = new Tag(
      'label',
      { for: name },
      name.charAt(0).toUpperCase() + name.slice(1),
    );
    this.fields.push(label.toString());
    const value = this.template[name];
    const { as, ...attributes } = options;

    if (as === 'textarea') {
      const tag = new Tag(
        'textarea',
        { cols: 20, rows: 40, name, ...attributes },
        value,
      );
      this.fields.push(tag.toString());
      return;
    }

    const tag = new Tag('input', {
      name,
      type: 'text',
      value,
      ...attributes,
    });
    this.fields.push(tag.toString());
  }

  submit(value = 'Save'): void {
    const tag = new Tag('input', {
      type: 'submit',
      value,
    });
    this.fields.push(tag.toString());
  }

  toString(): string {
    return this.fields.join('');
  }
}
