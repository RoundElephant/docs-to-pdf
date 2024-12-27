module.exports = {
  url: 'https://docs.cow.fi/',
  puppeteerConfig: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: {
      width: 1200,
      height: 800
    }
  },
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    }
  },
  routes: [
    '/',
    '/overview/introduction',
    '/overview/trading',
    '/overview/tokens',
    '/overview/orders',
    '/overview/settlement',
    '/overview/affiliate',
    '/tutorials/how-to-trade',
    '/tutorials/build-on-top',
    '/tutorials/use-the-api'
  ],
  coverPage: {
    title: 'CoW Protocol Documentation',
    version: '1.0.0',
    date: new Date().toLocaleDateString(),
    logo: 'https://docs.cow.fi/img/logo.svg'
  },
  cssSelectors: {
    include: ['article', '.markdown'],
    exclude: ['.edit-page-button', '.theme-last-updated']
  },
  output: './output/cow-protocol-docs.pdf'
};