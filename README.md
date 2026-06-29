# Web Automation Testing Framework

## Web to test

- UI: https://automationexercise.com/
- API: https://fakestoreapi.com/docs

## Commands

```bash
npx playwright test tests/ui/auth/register-submit-with-info.spec.ts

npx playwright show-report
```

## Setup

- Setup

```bash
git clone https://github.com/VinhTin-AQUA/Web-Automation-Testing-Framework.git
cd Web-Automation-Testing-Framework
npm i
```

- .env.dev

```bash
UI_URL=https://automationexercise.com/
API_URL=https://api-staging.example.com

```

- .env.prod

```bash
UI_URL=https://automationexercise.com/
API_URL=https://api-staging.example.com

```

- .env.staging

```bash
UI_URL=https://automationexercise.com/
API_URL=https://api-staging.example.com

```
