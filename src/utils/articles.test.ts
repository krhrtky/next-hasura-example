import { formatArticle } from './articles';

test('formatArticle', () => {
  expect(formatArticle('hoge\nfuga\n')).toEqual(['hoge\nfuga\n']);
  expect(formatArticle('hoge\n\nfuga\n')).toEqual(['hoge', 'fuga\n']);
})