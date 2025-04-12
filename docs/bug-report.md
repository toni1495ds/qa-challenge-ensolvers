# 🐞 Bug Report — QA Challenge

This document contains the list of bugs and usability issues identified during manual exploration of the QA Challenge application.

---

## Functional Bugs

### [Bug] Login - Cancel button causes continuous page refresh

**Description:**  
On the login interface, clicking the "Cancel" button results in a continuous page refresh loop. This behavior prevents the user from proceeding to the sign-up process or interacting further with the page.

**Relevant Links:**
https://qa-challenge.ensolvers.com/login

**Steps to reproduce:**

1. Navigate to https://qa-challenge.ensolvers.com/login
2. Click on the "Cancel" button.
3. Observe that the page begins to refresh.
4. Note that the user cannot proceed to sign up due to this behavior.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS

---

### [Bug] To Do Items - Folder sort not functioning while other columns sort correctly

**Description:**  
In the To Do Items interface, clicking on the "Folder" column header does not trigger any sorting action. In contrast, other columns such as "ID," "Title," and "Description" sort the list correctly when clicked.

**Relevant Links:**
https://qa-challenge.ensolvers.com/to-do-item?page=1&sort=id,asc

**Steps to reproduce:**

1. Navigate to the To Do Items interface.
2. Click on the "Folder" column header to attempt sorting by folder.
3. Observe that the list does not change or sort in any order.
4. Click on other column headers like "ID," "Title," or "Description" to confirm that those columns sort correctly.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS — Logged in as user

---

### [Bug] To Do Items - Refresh list button not triggering any action

**Description:**  
On the To Do Items interface, clicking the "Refresh List" button does not initiate any visible action or result in a data reload. No additional network requests or UI updates occur, indicating the button is unresponsive.

**Relevant Links:**
https://qa-challenge.ensolvers.com/to-do-item?page=1&sort=id,asc

**Steps to reproduce:**

1. Navigate to the To Do Items interface.
2. Click the "Refresh List" button.
3. Observe that there are no new network calls or changes in the list.
4. Verify in the console that no new fetch actions are being triggered upon clicking the button.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS — Logged in as user

---

### [Bug] To Do Items - Pagination controls are unresponsive

**Description:**  
In the To Do Items interface, the pagination controls for navigating forward or backward between pages are not functional. Clicking the pagination arrows does not result in any change to the displayed items or trigger any visible response.

**Relevant Links:**
https://qa-challenge.ensolvers.com/to-do-item?page=1&sort=id,asc

**Steps to reproduce:**

1. Navigate to the To Do Items interface.
2. Attempt to navigate to the next or previous page using the pagination arrows.
3. Observe that the page does not update and the item list remains unchanged.
4. Confirm that no network requests or changes in the interface occur after clicking the controls.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS — Logged in as user

---

### [Bug] Folder Deletion - Attempting to delete folder returns 500 error

**Description:**  
When attempting to delete a folder, the system returns a 500 Internal Server Error. The error occurs due to a foreign key constraint violation, as the folder is still being referenced by existing to-do items. The backend fails to execute the deletion SQL batch due to this constraint.

**Relevant Links:**
https://qa-challenge.ensolvers.com/api/folders/3

**Steps to reproduce:**

1. Navigate to the interface where folders can be managed.
2. Attempt to delete a folder that has associated to-do items.
3. Observe that a 500 Internal Server Error is returned.
4. Review the error response indicating a constraint violation related to foreign key dependencies.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS — Logged in as user

---

### [Bug] Registration - Duplicate user registration returns success but not reflected in UI

**Description:**  
When attempting to register a user with the same credentials as an existing account, the API responds with a 201 Created status, indicating success. However, the UI does not reflect this behavior and remains unresponsive, providing no indication that the user already exists or that the request was processed.

**Relevant Links:**
https://qa-challenge.ensolvers.com/account/register
https://qa-challenge.ensolvers.com/api/register

**Steps to reproduce:**

1. Navigate to the registration page.
2. Register a new user with valid credentials.
3. Submit the registration form and confirm the user is created.
4. Repeat the registration using the same credentials.
5. Observe that the API returns a 201 Created status again.
6. Note that the UI does not show any response or feedback, and the duplicate registration appears to be allowed silently.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS.

---

## Usability Feedback

### [Bug] Logout - Logged out page lacks user-friendly redirection or interaction

**Description:**  
After logging out, the user is redirected to a blank page with only a "Logged out successfully!" message displayed. The page does not provide any interactive options, such as navigation buttons or automatic redirection to the login screen, resulting in a poor user experience.

**Relevant Links:**
https://qa-challenge.ensolvers.com/logout

**Steps to reproduce:**

1. Navigate to the application while logged in.
2. Click on "Account" and select "Log out".
3. Observe that the user is redirected to a mostly blank page showing only a logout confirmation message.
4. Note the absence of navigation or redirection options.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS — Logged in as user

---

### [Bug] Registration - Register option only visible after logout and not accessible via Account settings

**Description:**  
The "Register" option is only visible after the user logs out of an active session. While logged in, there is no accessible way to initiate registration from the Account settings menu or elsewhere in the UI.

**Relevant Links:**
https://qa-challenge.ensolvers.com/logout

**Steps to reproduce:**

1. Log in to the application with a valid account.
2. Navigate to the Account settings or explore the interface while logged in.
3. Observe that there is no visible "Register" option.
4. Log out of the session.
5. Observe that the "Register" option becomes visible only after logging out.

**Environment:** https://qa-challenge.ensolvers.com — Chrome 123.0 on macOS — Logged in as user

---

This report includes 8 issues: 6 functional bugs and 2 UX problems encountered during QA testing of the Ensolvers challenge.
