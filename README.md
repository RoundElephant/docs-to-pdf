# CoW Protocol Documentation to PDF

This fork of docs-to-pdf is configured to generate a PDF version of the CoW Protocol documentation.

## Usage

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the package: `npm run build`
4. Run the PDF generation using one of these methods:

   Option 1 - Run directly:
   ```bash
   node lib/cli.js --config config/cow-protocol.js
   ```

   Option 2 - Install globally and run:
   ```bash
   npm install -g .
   docs-to-pdf --config config/cow-protocol.js
   ```

## Configuration

The configuration file (`config/cow-protocol.js`) includes:

- Base URL for the documentation
- Puppeteer configuration
- PDF output options
- Routes to include in the documentation
- Cover page settings
- CSS selectors for content inclusion/exclusion

## Notes

- This tool is configured to work with Docusaurus v3
- The PDF will include all major sections of the CoW Protocol documentation
- Images and styling are preserved in the output PDF