# শুরু করার গাইড (বাংলা)

এটি একটি Playwright automation project। Test-টি browser খুলে Automation Exercise website-এ যায়, Login page খোলে, `.env` থেকে account-এর তথ্য দিয়ে login করে এবং `Logged in as <name>` দেখা যাচ্ছে কি না যাচাই করে।

## ১. Account নিজে তৈরি করো

Browser-এ https://www.automationexercise.com/ খোলো → **Signup / Login** → **New User Signup!** দিয়ে account তৈরি করো। যে Name, Email ও Password দিয়েছ, সেগুলো মনে রাখো। এই signup ধাপটি assessment অনুযায়ী manual; code দিয়ে account বানানো হবে না।

## ২. VS Code-এ project খোলো

ZIP extract করার পরে VS Code-এ **File → Open Folder** থেকে `automationexercise-login-playwright` folder নির্বাচন করো। VS Code-এর **Terminal → New Terminal** খোলো।

## ৩. Dependencies ও browser install করো

Terminal-এ চালাও:

```bash
npm install
npx playwright install chromium
```

## ৪. Credentials local-এ যোগ করো

Project folder-এর `.env.example`-এর copy বানিয়ে নাম দাও `.env`। `.env` file-এ account তৈরি করার সময় ব্যবহার করা name/email/password বসাও. উদাহরণ:

```env
LOGIN_NAME=Sabbir
LOGIN_EMAIL=your-email@example.com
LOGIN_PASSWORD=your-password
```

আসল `.env` GitHub-এ upload করবে না। `.gitignore` সেটি আটকায়। GitHub-এ `.env.example` থাকবে, যেখানে শুধু placeholder আছে।

## ৫. Test চালাও

```bash
npm test
```

Browser দেখতে চাইলে:

```bash
npm run test:headed
```

Test pass হলে terminal-এ `1 passed` দেখা উচিত। কোনো ধাপে fail করলে Playwright failure message, screenshot ও trace দেখে বোঝা যাবে কোন ধাপে আটকে গেছে। HTML report খুলতে চালাও:

```bash
npm run report
```

## Code-এর মূল ধারণা

- `LoginPage.js`-এ page-এর element খোঁজা ও login action রাখা হয়েছে।
- `login.spec.js`-এ test scenario এবং সফল login-এর assertion আছে।
- `playwright.config.js`-এ base URL ও browser-এর setting আছে।
- `.env`-এ local credentials থাকে; `.gitignore` নিশ্চিত করে যেন সেটা GitHub-এ না যায়।
