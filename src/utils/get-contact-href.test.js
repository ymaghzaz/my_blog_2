// @flow strict
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('github', '#')).toBe('#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('linkedin', '#')).toBe('https://www.linkedin.com/amine-gherbi/#');
});
