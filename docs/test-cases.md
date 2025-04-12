# 📘 Task 1: Use Case List

This document provides a list of use cases for the QA Challenge application. Each use case includes a unique identifier, preconditions, detailed steps and expected results. The goal is to offer a reference framework for testing the application, both manually and through automation.

---

Session Management

**Test case 1: User login**

**Description:** Allows a user to authenticate into the system using valid credentials.

**Test Steps:**

1. Enter "user" in the username field.
2. Enter "user" in the password field.
3. Click the "Login" button.

**Expected Result:**

- The user is redirected to the dashboard containing folders and to-do items.

**Test case 2: Log out**

**Description:** Ends the user's session and returns to the login screen.

**Preconditions:**

- User is logged in.

**Test Steps:**

1. Click the "Account" menu.
2. Select "Log out".

**Expected Result:**

- The user is redirected to the login screen.
- 'Logged out successfully' is shown

---

To-Do Management

**Test case 3: Create a new To-Do**

**Description:** Allows the user to add a new to-do item with title and description.

**Preconditions:**

- User is logged in.
- The "Manage To-Do Items" section is open.

**Test Steps:**

1. Navigate to **"Manage To-Do Items"** from the homepage.
2. Click the **"+ Create new To Do Item"** button.
3. On the form:
   - Enter a valid title (e.g., `"Buy milk"`).
   - Enter a valid description (e.g., `"At the supermarket"`).
   - (Optionally) select a folder from the dropdown.
4. Click the blue **"Save"** button.

**Expected Result:**

- The new to-do appears in the list with the entered data.
- Toaster with 'created' is shown

**Test case 4: View a To-Do item**

**Description:** Allows the user to view the full details of a specific to-do item.

**Preconditions:**

- User is logged in.
- At least one to-do item exists in the list.

**Test Steps:**

1. Navigate to **"Manage To-Do Items"** from the homepage.
2. Identify any existing to-do in the list.
3. Click the **"View"** button associated with that item.

**Expected Result:**

- A detail view or modal is displayed showing:
  - **ID**
  - **Title**
  - **Description**
  - **Folder**
- No edit fields or actions are present in the view.
- A **"Back"** or **"Close"** action is available to return to the list.

**Test case 5: Edit a To-Do item**

**Description:** Allows the user to modify the title, description, or folder of an existing to-do item.

**Preconditions:**

- User is logged in.
- At least one to-do item exists in the list.

**Test Steps:**

1. Navigate to **"Manage To-Do Items"** from the homepage.
2. Click the **"Edit"** button next to an existing to-do.
3. On the form:
   - Confirm the current values are pre-filled (ID, Title, Description, Folder).
   - Modify the **Title** (e.g., change `"task 17"` to `"task 17 - updated"`).
   - Modify the **Description** (e.g., add more detail).
   - Change the **Folder** selection (if possible).
4. Click the blue **"Save"** button.

**Expected Result:**

- The user is redirected back to the to-do list.
- Toaster with 'updated' is shown
- The updated to-do appears with the new values for Title, Description, and Folder.

**Test case 6: Delete a To-Do item**

**Description:** Allows the user to delete a to-do item after confirming the deletion through a modal dialog.

**Preconditions:**

- User is logged in.
- At least one to-do item exists in the list.

**Test Steps:**

1. Navigate to **"Manage To-Do Items"** from the homepage.
2. Click the **"Delete"** button next to an existing to-do item.
3. A modal titled **"Confirm delete operation"** appears.
4. Click the red **"Delete"** button in the modal.

**Expected Result:**

- The modal closes.
- The selected to-do item is removed from the list.
- Toaster with 'deleted' is shown
- The list is updated and the item no longer appears.

**Test case 7: Sort To-Do items by columns**

**Description:** Verifies that clicking on column headers sorts the To-Do list by that column (ascending/descending).

**Preconditions:**

- User is logged in.
- Multiple to-do items with distinct IDs, titles, descriptions, and folders exist.

**Test Steps:**

1. Navigate to **"Manage To-Do Items"**.
2. Click on the column header **"Title"**.
3. Observe the order of titles in the list.
4. Click the **"Title"** header again to reverse the sort.
5. Repeat steps 2–4 for **"ID"**, **"Description"**, and **"Folder"** columns.

**Expected Result:**

- The list is sorted accordingly:
  - First click: ascending order.
  - Second click: descending order.
- The arrow indicator (if present) reflects the sort direction.

<!--
Comment 1:
Clicking the "Refresh List" button on the To-Do page triggers a backend fetch (visible in console logs as `toDoItem/fetch_entity_list`), but there is no visual indication or feedback for the user. Consider adding a loading indicator, toast, or some other confirmation to improve usability.
-->

<!--
Comment 2:
Pagination controls are visible on the To-Do Items page, but they do not seem to be interactive. Clicking on them has no visible effect on the list content. Consider reviewing their implementation or disabling them if not functional.
-->

---

Folder Management

**Test case 8: Create a new Folder**

**Description:** Allows the user to create a new folder by providing a name.

**Preconditions:**

- User is logged in.
- The "Folders" section is open.

**Test Steps:**

1. Navigate to **"Manage Folders"** from the homepage.
2. Click the **"+ Create new Folder"** button.
3. Enter a valid folder name (e.g., `"Projects"`).
4. Click the blue **"Save"** button.

**Expected Result:**

- The user is redirected to the folders list.
- A new folder appears in the list with the given name.
- Toaster with 'created' is shown.

**Test case 9: View a Folder**

**Description:** Allows the user to view details of a folder.

**Preconditions:**

- User is logged in.
- At least one folder exists.

**Test Steps:**

1. Navigate to **"Manage Folders"** from the homepage.
2. Click the **"View"** button next to a folder.

**Expected Result:**

- A detail view is shown displaying:
  - **ID**
  - **Name**
  - **User**
- A **"Back"** button is available to return to the list.

**Test case 10: Edit a Folder**

**Description:** Allows the user to update the name of an existing folder.

**Preconditions:**

- User is logged in.
- At least one folder exists.

**Test Steps:**

1. Navigate to **"Manage Folders"**.
2. Click the **"Edit"** button next to a folder.
3. On the form:
   - Confirm the current folder name is pre-filled.
   - Modify the **Name** field (e.g., from `"fff"` to `"work folder"`).
4. Click the blue **"Save"** button.

**Expected Result:**

- The user is redirected back to the folder list.
- The folder name is updated.
- Toaster with 'updated' is shown.

**Test case 11: Delete a Folder**

**Description:** Allows the user to delete a folder after confirmation.

**Preconditions:**

- User is logged in.
- At least one folder exists.

**Test Steps:**

1. Navigate to **"Manage Folders"**.
2. Click the **"Delete"** button next to a folder.
3. A modal titled **"Confirm delete operation"** appears.
4. Click the red **"Delete"** button.

**Expected Result:**

- The folder is removed from the list.
- The modal closes.
- Toaster with 'deleted' is shown.

<!--
Comment:
Clicking the "Refresh List" button on the Folders page triggers a backend fetch (visible in console logs as `toDoItem/fetch_entity_list`), but there is no visual indication or feedback for the user. Consider adding a loading indicator, toast, or some other confirmation to improve usability.
-->

<!--
Comment:
The table on the "Folders" page displays sort icons in the column headers (e.g., "ID" and "Name"), but clicking them does not trigger any sorting action. This could be misleading for the user and is likely a missing or broken feature.
-->

---

Account Management

**Test case 12: Update user settings**

**Description:** Allows the user to update their first name, last name, and email address.

**Preconditions:**

- User is logged in.

**Test Steps:**

1. Click the **"Account"** dropdown in the top navigation.
2. Select **"Settings"**.
3. On the form:
   - Edit **First Name** (e.g., change `"John"` to `"Johnny"`).
   - Edit **Last Name** (e.g., `"Doe"` to `"Test"`).
   - Edit **Email** (e.g., `"john.doe@example.com"` to `"johnny@test.com"`).
4. Click the **"Save"** button.

**Expected Result:**

- The updated information is saved.
- A toaster message appears: "Settings saved!"
- Upon navigating away and returning, the fields retain the updated values.

---