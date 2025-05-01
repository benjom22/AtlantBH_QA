# Navigator.ba Testing Project

This repository contains automated smoke tests for the [Navigator.ba](https://www.navigator.ba) web application using **Selenium WebDriver** and **Jest**.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/benjom22/AtlantBH_QA.git
cd testing
```

### 2. Install Dependencies

```bash
npm install --save-dev jest selenium-webdriver
```

### 3. Run Tests

```bash
npx jest tests/navigator.test.js
```

### 4. Test Plan

The full Test Plan with:

- Functional descriptions

- Positive/negative test cases

- Identified smoke tests

- Bug reports can be found in the Test Cases Documentation.pdf file inside this repository.

### 5. Notes

- Chrome browser is used for testing via chromedriver

- Timeout values are extended for page load reliability.
