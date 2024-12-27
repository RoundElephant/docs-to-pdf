# CoW Protocol Documentation to PDF

This fork of docs-to-pdf is configured to generate a PDF version of the CoW Protocol documentation.

## Usage

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the PDF generation: `npm run generate -- --config config/cow-protocol.js`

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