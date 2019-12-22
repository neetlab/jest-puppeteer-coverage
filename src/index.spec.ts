import { renderHTML, setTitle } from ".";

test("renderHTML", async () => {
  renderHTML(page);
  const content = await page.content();
  expect(content).toMatchSnapshot();
});

test("setTitle", async () => {
  setTitle(page, "hello");
  const content = await page.content();
  expect(content).toMatchSnapshot();
});
