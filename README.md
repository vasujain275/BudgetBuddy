# BudgetBuddy - Personal Finance Management Platform

BudgetBuddy is a comprehensive web application designed to help users manage their personal finances. With BudgetBuddy, users can track income, expenses, and savings goals, set budgets, and gain valuable insights into their spending habits. This platform is built using Fastify, TypeScript, Drizzle, SQLite, and Svelte, providing a robust and scalable solution for personal finance management.

## Features

### MVP (Minimum Viable Product)

#### Backend (Fastify, TypeScript, Drizzle, SQLite)

1. **User Authentication**

   - Sign Up: Users can sign up with email and password.
   - Log In: Users can log in to the platform.
   - Log Out: Users can log out of their accounts.

2. **Financial Transactions Management**

- Add Transaction: Users can add income and expense transactions.
  - Transaction List: API to fetch a list of all transactions.
  - Transaction Details: API to fetch details of a specific transaction.

3. **Category Management**

   - Add Category: Users can add categories for their transactions (e.g., Food, Rent, Entertainment).
   - Category List: API to fetch a list of all categories.

4. **Budgeting**

   - Set Budget: Users can set monthly budgets for different categories.
   - Budget Overview: API to fetch budget vs. actual spending.

5. **User Profile**
   - View Profile: API to fetch user profile details, including transactions and budgets.

#### Frontend (Svelte)

1. **User Authentication**

   - Sign Up Form: UI for user sign-up with email and password.
   - Log In Form: UI for user log-in.
   - Log Out Button: UI for user log-out.

2. **Financial Transactions Management**

   - Add Transaction Form: UI for adding income and expense transactions.
   - Transaction List: Display a list of all transactions.
   - Transaction Details Page: Display detailed information about a specific transaction.

3. **Category Management**

   - Add Category Form: UI for adding new transaction categories.
   - Category List: Display a list of all categories.

4. **Budgeting**

   - Set Budget Form: UI for setting monthly budgets.
   - Budget Overview: Display budget vs. actual spending.

5. **User Profile**
   - Profile Page: Display user profile details, including transactions and budgets.

### Future Enhancements

#### Backend

1. **Enhanced User Authentication**

   - OAuth: Integration with third-party authentication providers (e.g., Google, Facebook).
   - Email Verification: Ensure users verify their email addresses.

2. **Financial Insights**

   - Spending Analysis: Provide insights into spending habits over time.
   - Income vs. Expense Reports: Generate reports comparing income and expenses.

3. **Savings Goals**

   - Set Goals: Users can set and track savings goals.
   - Goal Progress: API to fetch the progress of savings goals.

4. **Notifications**

   - Email Notifications: Notify users of upcoming bills and budget limits.
   - Push Notifications: Real-time notifications for significant financial events.

5. **Admin Dashboard**

   - Admin Management: Admin users can manage user accounts and transactions.
   - Analytics: Provide analytics on user engagement and platform usage.

6. **Multi-currency Support**

   - Currency Conversion: Support for multiple currencies and conversion rates.
   - Currency Settings: API to fetch and update user’s preferred currency.

7. **Recurring Transactions**

   - Recurring Transactions: Support for adding recurring income and expenses.
   - Recurring Management: API to manage recurring transactions.

8. **Mobile App Companion**
   - Mobile API: Provide API endpoints optimized for mobile app integration.

#### Frontend

1. **Enhanced User Authentication**

   - OAuth Integration: UI for logging in with Google, Facebook, etc.
   - Email Verification: UI for email verification process.

2. **Financial Insights**

   - Spending Analysis Charts: UI to display spending habits over time.
   - Income vs. Expense Reports: UI to generate and view reports.

3. **Savings Goals**

   - Set Goal Form: UI for setting savings goals.
   - Goal Progress: UI to track progress of savings goals.

4. **Notifications**

   - Notification System: UI for email and push notifications.

5. **Admin Dashboard**

   - Admin Panel: UI for admin users to manage user accounts and transactions.
   - Analytics Dashboard: UI to display platform usage analytics.

6. **Multi-currency Support**

   - Currency Settings: UI for managing preferred currency settings.

7. **Recurring Transactions**

   - Recurring Transaction Form: UI for adding and managing recurring transactions.

8. **Mobile App Companion**
   - Mobile-friendly Design: Ensure the web app is responsive and works well on mobile devices.
   - Push Notifications: UI for managing push notifications on mobile.
