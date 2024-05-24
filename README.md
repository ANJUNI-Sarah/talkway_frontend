# Talkway

Online English conversation and speaking practice.

## Getting Start

-   Upgrade node.js to 21.6.2
-   Run `npm install yarn --g`
-   Run `yarn` for install.
-   Run `npx husky prepare`

## Commands

##### Run the development server

```
yarn dev
```

##### Build for production

```
yarn build
```

##### Run ESlint linting

```
yarn lint
```

##### Run ESlint linting and fix

```
yarn lint:fix
```

##### Run ESlint linting and type check

```
yarn validate
```

## Naming Rule

### Branch Naming Rule

-   {feat/fix/improve}/{description}

```
[
  feat,     // 功能
  fix,      // bugs 修復
  improve,  // Refactor / Docs / Test
]
```

### Git Commit Rule

Please follow [config-conventional](https://github.com/conventional-changelog/commitlint)

```
<type>[optional scope]: <description> #<task id>

[optional body]

[optional footer(s)]
```

#### Example:

```
feat(auth): add user login functionality #12345

- Users can now log in using their email and password.
- Added validation for input fields.

BREAKING CHANGE: The API endpoint for fetching user data has been changed from `/api/user_data` to `/api/data/user`. Please update your calls accordingly.
```

#### Type Enum

```
[
  build,    // 建構專案工具(vite/lint... )
  feat,     // 新增功能
  fix,      // bugs 修復
  docs,     // 文件類修改(README.md/storybook...)
  style,    // 樣式/theme
  refactor, // 重構
  perf,     // 處理效能相關
  revert,   // 撤銷commit
  test,     // 測試
  ci,       // ci相關配置
]
```

## File Structure(待捕)