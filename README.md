# Autofill Chrome Extension

A powerful Chrome extension that helps you automatically fill form fields with predefined data, saving time and reducing repetitive typing.

## Features

- **Auto-fill Forms**: Automatically populate form fields with saved data
- **Multiple Profiles**: Create and manage multiple autofill profiles for different use cases
- **Text Clips**: Store and insert frequently used text snippets
- **Variables**: Use dynamic variables in your autofill rules
- **Advanced Rules**: Create complex autofill patterns with JavaScript support
- **Site Exceptions**: Exclude specific websites from autofill
- **Customizable Shortcuts**: Set keyboard shortcuts for quick autofill execution
- **Import/Export**: Backup and restore your autofill settings
- **Multi-language Support**: Available in English, French, Portuguese, and Chinese

## Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension folder
5. The Autofill extension will now appear in your Chrome toolbar

## Usage

### Creating Autofill Rules

1. Click the Autofill icon in your Chrome toolbar
2. Go to **Options** to open the settings page
3. On the **Fields** tab, click the **+** button to add a new rule
4. Configure:
   - **Type**: Text, Password, Select, Checkbox/Radio, or JavaScript
   - **Name**: Field identifier
   - **Value**: Data to fill in
   - **Site**: Domain where this rule applies (optional)
   - **Mode**: Safe, Overwrite, Prepend, Append, Wrap, Increment, Decrement

### Setting Up Profiles

1. Go to **Options** → **Fields**
2. Use the profile dropdown to select or create profiles
3. Each profile can have its own set of autofill rules
4. Switch between profiles using the dropdown or keyboard shortcut

### Using Text Clips

1. Go to **Options** → **Text Clips**
2. Enter text snippets separated by `===`
3. Right-click on editable fields and select **Insert** → your text clip

### Using Variables

1. Go to **Options** → **Variables**
2. Define variables in the format: `VARIABLE_NAME = value`
3. Use variables in your autofill rules (requires JavaScript type)

### Keyboard Shortcuts

1. Go to **Options** → **Fields**
2. Click the hotkey field for a profile to set a custom shortcut
3. Use the assigned shortcut to quickly execute autofill rules

## Backup and Restore

### Export Settings

1. Go to **Options** → **Import/Export**
2. Click **Export** to download your settings as a CSV file

### Import Settings

1. Go to **Options** → **Import/Export**
2. Click **Import** to upload a previously exported CSV file
3. Or use **Import from URL** to load settings from a remote file

## Configuration

### Advanced Settings

- **Debug Mode**: Enable for troubleshooting
- **Sound Notifications**: Play a sound when autofill completes
- **Voice Feedback**: Get audio feedback with different voice options
- **Auto Import**: Automatically load settings from a URL on startup
- **Field Masking**: Hide password fields as you type

### Field Filtering

- **Site Filters**: Choose how to match website URLs
- **Skip Hidden Fields**: Avoid filling hidden form fields
- **Attributes Whitelist**: Specify which HTML attributes to use

## Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Execute All Profiles | `Ctrl+Shift+Y` | `Cmd+Shift+Y` |
| Context Menu | Right-click | Right-click |
| Extension Options | Click icon → Options | Click icon → Options |

## Project Structure

```
Autofill/
├── manifest.json           # Extension configuration
├── options.html            # Settings interface
├── js/
│   ├── autofill.js        # Main autofill logic
│   ├── eventPage.js       # Background service worker
│   ├── options.js         # Settings page logic
│   ├── wizard.js          # Field creation wizard
│   ├── codeflask.min.js   # Code editor library
│   ├── purify.min.js      # HTML sanitizer
│   ├── jquery3.min.js     # jQuery library
│   └── snarkdown.min.js   # Markdown parser
├── css/
│   ├── options.css        # Settings styles
│   └── wizard.css         # Wizard styles
├── images/                # Extension icons
├── sounds/                # Audio notifications
└── _locales/              # Language translations
    ├── en/
    ├── fr/
    ├── pt_PT/
    └── zh_CN/
```

## Permissions

This extension requires the following permissions:

- **storage**: Save your autofill rules and settings
- **contextMenus**: Right-click menu for quick access
- **scripting**: Execute JavaScript in pages
- **activeTab**: Access current tab information

## Changelog

### Version 11.9.0

- Updated to Manifest V3 (Chrome Extension standards)
- Improved compatibility with latest Chrome browser
- Enhanced security and performance

### Older Versions

See [CHANGELOG](./CHANGELOG.txt) for full version history.

## Support

- **Online Help**: [tohodo.com/autofill/help](https://www.tohodo.com/autofill/help.html)
- **Support Forum**: [Google Groups](https://groups.google.com/g/chrome-autofill)
- **Privacy Policy**: [tohodo.com/autofill/privacy](https://www.tohodo.com/autofill/privacy.html)

## FAQ

**Q: Is my data safe?**
A: Yes! All your autofill data is stored locally on your computer in Chrome's storage. It's never sent to external servers.

**Q: Can I use this on multiple computers?**
A: If you're signed into Chrome, your data will sync across devices using Chrome Sync (if enabled).

**Q: Does this work on all websites?**
A: It works on most websites. You can exclude specific sites in the **Exceptions** tab.

**Q: How do I reset to default settings?**
A: Go to **Options** and click the **Reset** button. This will restore all default settings.

## License

This extension is created by **tohodo.com**. All rights reserved.

## Contributing

Found a bug or have a feature request? Join our [support forum](https://groups.google.com/g/chrome-autofill) to share your feedback!

## Related Links

- [Chrome Web Store](https://chrome.google.com/webstore/detail/autofill/nlmmgnhgdeffjkdckmikfpnddkbbfkkk)
- [Practice Form](https://www.tohodo.com/autofill/form.html)
- [Keyboard Shortcuts Help](https://www.tohodo.com/autofill/help.html#keyboard)
- [Official Website](https://www.tohodo.com/)

---

**Author**: T. H. Doan  
**Email**: [tohodo.com](https://www.tohodo.com/)  
**Copyright**: © 2010–2024 tohodo.com  
**Version**: 11.9.0
