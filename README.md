## Playwright API Testing Project

The project focuses on verifying API functionality through automated tests for GET and POST requests, ensuring that each endpoint behaves as expected under various scenarios.


## Course : Playwright: Web Automation Testing From Zero to Hero

## Tutor : Artem Bondar


### Technologies Used:
**Playwright**: Leverages Playwright's API testing capabilities for accurate and reliable request/response validation.\
**TypeScript**: Ensures type safety and enhances test reliability and maintainability.\
**JSON**: Used to mock API responses and define test data.
**Axios/Fetch API (optional)**: Used in some cases to handle complex API request scenarios.


## 🚀 Getting Started
**Prerequisites**
Node.js (version 16 or above)
Playwright installed globally or as a project dependency

``` bash
npm install @playwright/test
```

**Setup**

Clone this repository
``` bash
git clone https://github.com/your-username/playwright-api-testing.git
```

Install dependencies:
``` bash
npm install
```

Run your API tests:
``` bash
npx playwright test
```

## 🛠 Usage
### Mocking API Data
The project uses JSON to mock API data. You can find the mock data in the testdata/tags.json file. This allows the tests to simulate API responses, helping you run tests in isolation without depending on the actual backend.

Sample mock data structure:
``` bash
{
    "tags": [
        "automation",
        "playwright",
        "Git"
    ]
}
```

## 📂 Project Structure
tests/: All test files, including API tests and any other end-to-end tests.\
testdata/: JSON files used for mock data to simulate different API responses.

## 📬 Contributing
Contributions are welcome! Feel free to fork this repository, create a branch, and submit a pull request with your improvements or bug fixes.
