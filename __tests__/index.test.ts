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

  test('создаёт поля формы', () => {
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
    });

    expect(form).toBe(
      '<form action="#" method="post"><input name="name" type="text" value="rob"><textarea cols="20" rows="40" name="job">hexlet</textarea></form>',
    );
  });

  test('добавляет атрибуты к полям', () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input('name', { class: 'user-input' });
      f.input('job');
    });

    expect(form).toBe(
      '<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"><input name="job" type="text" value="hexlet"></form>',
    );
  });

  test('переопределяет стандартные атрибуты textarea', () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input(
        'job',
        { as: 'textarea', rows: 50, cols: 50 },
      );
    });

    expect(form).toBe(
      '<form action="#" method="post"><textarea cols="50" rows="50" name="job">hexlet</textarea></form>',
    );
  });

  test('выбрасывает ошибку для отсутствующего поля', () => {
    expect(() =>
      HexletCode.formFor(template, {}, (f) => {
        f.input('age');
      }),
    ).toThrow("Field 'age' does not exist in the template.");
  });
});
