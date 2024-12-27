#!/bin/bash

# Build the project first if not already built
if [ ! -d "lib" ]; then
    echo "Building project..."
    npm run build
fi

# Run the PDF generation
node lib/cli.js docusaurus \
  --baseUrl https://docs.cow.fi \
  --initialDocURLs /overview/introduction,/overview/trading,/overview/tokens,/overview/orders,/overview/settlement,/overview/affiliate,/tutorials/how-to-trade,/tutorials/build-on-top,/tutorials/use-the-api \
  --outputPDFFilename cow-protocol-docs.pdf \
  --coverTitle "CoW Protocol Documentation" \
  --paperFormat A4 \
  --version 3 \
  --contentSelector "article,.markdown" \
  --excludeSelectors ".edit-page-button,.theme-last-updated" \
  --pdfMargin "20mm"
