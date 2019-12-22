import puppeteer from "puppeteer";

export const renderHTML = async (page: puppeteer.Page) => {
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="app">hello</div>
    </body>
    </html>
  `);
};
