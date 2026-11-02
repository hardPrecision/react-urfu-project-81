import { describe, expect, test } from 'vitest';
import Tag from '../src/Tag.js';

describe('Tag', () => {
  test.each(['br', 'hr', 'img', 'input', 'meta', 'link'])(
    'создаёт одинарный тег %s',
    (name) => {
      expect(new Tag(name).toString()).toBe(`<${name}>`);
    },
  );

  test('создаёт одинарный тег с атрибутом', () => {
    const tag = new Tag('img', { src: 'path/to/image' });
    expect(tag.toString()).toBe('<img src="path/to/image">');
  });

  test('сохраняет порядок нескольких атрибутов', () => {
    const tag = new Tag('input', { type: 'submit', value: 'Save' });
    expect(tag.toString()).toBe('<input type="submit" value="Save">');
  });

  test('создаёт парный тег с содержимым', () => {
    const tag = new Tag('label', {}, 'Email');
    expect(tag.toString()).toBe('<label>Email</label>');
  });

  test('создаёт парный тег с атрибутом и содержимым', () => {
    const tag = new Tag('label', { for: 'email' }, 'Email');
    expect(tag.toString()).toBe('<label for="email">Email</label>');
  });

  test('создаёт пустой парный тег', () => {
    expect(new Tag('div').toString()).toBe('<div></div>');
  });

  test('создаёт пустой парный тег с атрибутом', () => {
    const tag = new Tag('div', { class: 'field' });
    expect(tag.toString()).toBe('<div class="field"></div>');
  });

  test('сохраняет пустое значение атрибута', () => {
    const tag = new Tag('input', { value: '' });
    expect(tag.toString()).toBe('<input value="">');
  });
});
