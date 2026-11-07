const singleTags = ['br', 'hr', 'img', 'input', 'meta', 'link'];

export default class Tag {
  constructor(
    private name: string,
    private attributes: Record<string, string | number> = {},
    private content: string = '',
  ) {}

  toString(): string {
    const attributes = Object.entries(this.attributes)
      .map(([name, value]) => `${name}="${value}"`)
      .join(' ');

    const openingTag = attributes
      ? `<${this.name} ${attributes}>`
      : `<${this.name}>`;

    if (singleTags.includes(this.name)) {
      return openingTag;
    }

    return `${openingTag}${this.content}</${this.name}>`;
  }
}
