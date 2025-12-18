# Dropdown Component

## Overview

The Dropdown component provides flexible selection functionality for data filtering and form inputs.

## Features

- **Single/Multiple Selection**: Support both single and multiple selection modes
- **Search Functionality**: Built-in search to quickly find options
- **Grouping**: Group options by categories
- **Custom Styling**: Flexible style customization

## Configuration

### Basic Usage

```javascript
// Single selection
const dropdown1 = new Dropdown({
  placeholder: "Select an option",
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]
});

// Multiple selection
const dropdown2 = new Dropdown({
  multiple: true,
  placeholder: "Select options",
  options: [...]
});
```

### Advanced Configuration

- **Data Binding**: Bind to data sources
- **Event Handling**: Custom event handlers
- **Validation**: Input validation rules
