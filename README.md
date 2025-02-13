# Automated Test Suite using **Playwright** in **TypeScript** following the **Page Object Model (POM)** principles  
By Njabulo Nkabane

### Prerequisites:

1. **Node.js** (v16 or higher) installed.
2. **TypeScript** installed globally:  
   `npm install -g typescript`
3. **Playwright** installed:  
   `npm install playwright`
4. **Test Runner**: We'll use **Playwright Test** for the test suite. Install it via:  
   `npm install @playwright/test`

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd NjabuloSolution
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
3. Run The Solution

```bash
npx playwright test
```

Alternatively, if you prefer to see the test execution in a UI, you can open Playwright's UI runner:

```bash
npx playwright test --ui
```

This UI allows you to run specific tests and provides easier debugging by showing where tests fail.

### Test Reports

After running the tests, you'll see a detailed report in the terminal or in a folder called `test-results`. To view a detailed HTML report of the tests that ran, use the following command:

```bash
npx playwright show-report
```
---
   
## Create The Project From Scratch
### Folder Structure:

```
/NjabuloSolution
├── /pages
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── /tests
│   ├── PositiveLogin.test.ts
│   ├── NegativeLogin.test.ts
│   ├── Product.test.ts
│   └── Logout.test.ts
├── /utils
│   └── testData.ts
├── package.json
├── tsconfig.json
└── README.md
```
### Step 1: Install Playwright and Playwright Test

In your project folder, run the following commands:

```bash
npm init -y
npm install playwright @playwright/test typescript
npx playwright install
```

### Step 2: TypeScript Configuration

Create a `tsconfig.json` file in the root directory to configure TypeScript.

### Step 3: Page Object Model (POM)

The page object files encapsulate the logic for each page and define all elements related to that page. Using this model helps centralize the page-specific code in one place, making it reusable and easier to maintain.

#### `LoginPage.ts`
#### `ProductPage.ts`
#### `CartPage.ts`
#### `CheckoutPage.ts`

### Step 4: Test Data (utils/testData.ts)

The `testData.ts` file provides randomized data where necessary. This ensures that the tests are not limited to static data and can simulate real-world variability.

### Step 5: Test Files

The test files implement the actual test cases. Each test case uses the Page Object Model to interact with the pages. Tests are parameterized, allowing different data sets to be tested, which increases the flexibility and maintainability of the tests.

#### `PositiveLogin.test.ts`
#### `NegativeLogin.test.ts`
#### `Product.test.ts`
#### `Logout.test.ts`

### Step 6: Run the Tests

You can run the tests using Playwright's test runner:

```bash
npx playwright test
```

Alternatively, if you prefer to see the test execution in a UI, you can open Playwright's UI runner:

```bash
npx playwright test --ui
```

This UI allows you to run specific tests and provides easier debugging by showing where tests fail.

### Test Reports

After running the tests, you'll see a detailed report in the terminal or in a folder called `test-results`. To view a detailed HTML report of the tests that ran, use the following command:

```bash
npx playwright show-report
```
