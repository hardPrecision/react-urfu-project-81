import { describe, expect, test } from 'vitest';
import HexletCode from '../src/index.js';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

describe('formFor', () => {
  test('создаёт пустую форму', () => {
    const form = HexletCode.formFor(template, {}, () => {});

    expect(form).toBe('<form action="#" method="post"></form>');
  });

  test('создаёт форму с указанным адресом', () => {
    const form = HexletCode.formFor(template, { url: '/users' }, () => {});

    expect(form).toBe('<form action="/users" method="post"></form>');
  });
});
