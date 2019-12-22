import { renderHTML } from ".";

test('renderHTML', async () => {
  renderHTML(page);
  const content = await page.content();
  expect(content).toMatchSnapshot();
});
