# SDET Take-Home Assessment – Playwright (JavaScript)

## Overview

This repository contains a **test automation project** developed as part of an **SDET Take-Home Assessment**.  
The purpose of this project is to validate the **login functionality** of a web application using **Playwright with JavaScript**.

The project implements **positive and negative login scenarios** and follows **automation best practices** such as test independence and Page Object Model (POM).

---

## Application Under Test

- **URL**: https://the-internet.herokuapp.com/login  
- **Valid Credentials**:
  - Username: `tomsmith`
  - Password: `SuperSecretPassword!`


## Project Structure (High Level)

pages/ # Page Objects (UI interactions)
tests/ # Automated test cases
package.json
playwright.config.js
README.md

## Test Cases Covered

- **Successful login**
- **Login with invalid username**
- **Login with invalid password**

Each test:
- Is independent
- Can be executed in any order
- Validates both system behavior and user flow

---

## Prerequisites

Before running the project, ensure you have:

- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)
- Internet connection (tests run against a public site)

---

## Setup Instructions

1. Clone the repository
2.git clone <repository-url>
3. npm install
4. npm install -D @playwright/test
5. npx playwright install


## Run test
1. npx playwright test
2. npx playwright test --headed



