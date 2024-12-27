# CoW Protocol Documentation to PDF

This fork of docs-to-pdf is configured to generate a PDF version of the CoW Protocol documentation.

## Usage

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make the script executable and run it:
   ```bash
   chmod +x generate-cow-docs.sh
   ./generate-cow-docs.sh
   ```

Alternatively, you can run the command directly:

```bash
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
```

## Configuration Options

The command uses these options:

- `--baseUrl`: The base URL of the documentation site
- `--initialDocURLs`: Comma-separated list of documentation pages to include
- `--outputPDFFilename`: Name of the output PDF file
- `--coverTitle`: Title for the PDF cover page
- `--paperFormat`: Paper format (A4)
- `--version`: Docusaurus version (set to 3)
- `--contentSelector`: CSS selectors for main content
- `--excludeSelectors`: CSS selectors for elements to exclude
- `--pdfMargin`: PDF margin size

## Notes

- This tool is configured for Docusaurus v3
- The PDF will include all major sections of the CoW Protocol documentation
- Images and styling are preserved in the output PDF