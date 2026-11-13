import Tag from './Tag.js';

type AttributeValue = string | number;
type InputOptions = {
  [key: string]: AttributeValue | Record<string, AttributeValue> | undefined;
  as?: string;
  label?: string;
  labelHtml?: Record<string, AttributeValue>;
};

export default class Form {
  private fields: string[] = [];

  constructor(private template: Record<string, string>) {}

  input(name: string, options: InputOptions = {}): void {
    if (!Object.hasOwn(this.template, name)) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }

    const {
      as,
      label = name.charAt(0).toUpperCase() + name.slice(1),
      labelHtml = {},
      ...attributes
    } = options;
    const fieldAttributes = attributes as Record<string, AttributeValue>;
    const labelTag = new Tag(
      'label',
      { for: name, ...labelHtml },
      label,
    );
    this.fields.push(labelTag.toString());
    const value = this.template[name];

    if (as === 'textarea') {
      const tag = new Tag(
        'textarea',
        { cols: 20, rows: 40, name, ...fieldAttributes },
        value,
      );
      this.fields.push(tag.toString());
      return;
    }

    const tag = new Tag('input', {
      name,
      type: 'text',
      value,
      ...fieldAttributes,
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
