import { test, expect, Page } from '@playwright/test';


test.describe.serial('ToDo App Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc#/');
  });

  async function addTodo(page: Page, text: string) {
    await page.fill('.new-todo', text);
    await page.press('.new-todo', 'Enter');
  }

  // 1. Add a new todo item
  test('add a new todo item', async ({ page }) => {
    await addTodo(page, 'Test Task');
    await expect(page.locator('.todo-list li')).toHaveText('Test Task');
  });

  // 2. Display todo count
  test('display correct todo count', async ({ page }) => {
    await addTodo(page, 'Task 1');
    await expect(page.locator('.todo-count')).toContainText('1 item left');
  });

  // 3. Mark todo as complete
  test('mark todo as complete', async ({ page }) => {
    await addTodo(page, 'Complete Task');
    const toggle = page.locator('.toggle').first();
    await toggle.check();
    await expect(toggle).toBeChecked();
  });

    // 4. Mark todo as incomplete
//   test('mark todo as incomplete', async ({ page }) => {
//     await addTodo(page, 'Task to Uncheck');
//     const toggle = page.locator('.toggle').first();
//     await toggle.check();
//     await toggle.uncheck();
//     await expect(toggle).not.toBeChecked();
//   });

//     // 5. Delete a todo item
//   test('delete a todo item', async ({ page }) => {
//     await addTodo(page, 'Delete Task');
//     const todo = page.locator('.todo-list li').first();
//     await todo.hover();
//     await todo.locator('.destroy').click();
//     await expect(page.locator('.todo-list li')).toHaveCount(0);
//   });

//     // 6. Edit a todo item

//   test('edit a todo item', async ({ page }) => {
//     await addTodo(page, 'Editable Task');
//     const todo = page.locator('.todo-list li').first();
//     await todo.locator('label').dblclick();
//     await page.fill('.edit', 'Updated Task');
//     await page.press('.edit', 'Enter');
//     await expect(todo.locator('label')).toHaveText('Updated Task');
//   });

//   // 7. Filter todos by status (All/Active/Completed)
//   test('should filter todos by status', async ({ page }) => {
//       await addTodo(page, 'should filter todos by status')
//       await page.waitForTimeout(1000)
//       await page.locator('a[href="#/active"]').click();
//       await expect(page.locator('a[href="#/active"]')).toHaveClass(/selected/)
//       await page.waitForTimeout(1000)
//       await page.locator('a[href="#/completed"]').click();
//       await expect(page.locator('a[href="#/completed"]')).toHaveClass(/selected/);
//       await page.waitForTimeout(1000)
//   });
    
//     // 8. Clear completed todos
//   test('Clear completed todos', async ({ page }) =>{
//       await addTodo(page, 'Clear completed todos')
//       const toggle = page.locator('.toggle').first();
//       await toggle.check();
//       await expect(toggle).toBeChecked();
//       await page.click(".clear-completed")
//   })

//    //   9. Empty state display
//   test('Empty state display', async ({ page }) => {
//     await page.goto('https://demo.playwright.dev/todomvc#/');

//     await expect(page.locator('.todo-list')).toHaveCount(0);
//   });

//   // 10. Persist todos after page refresh
//   test('Persist todos', async ({page}) =>{
//     await addTodo(page, 'Empty state display')
//     await page.reload()
//     const taskText = await page.textContent('.todo-list li');
//     expect(taskText).toBe("Empty state display")
//   });

//   // 11. Keyboard support (Escape and Enter)
//   test('Keyboard support', async({page}) =>{
//     await addTodo(page,'Keyboard support')
//     await page.dblclick('.todo-list li label')
//     await page.fill('.edit', 'Updated Task with Enter')
//     await page.press('.edit', 'Enter');
//     const updatedText = await page.textContent('.todo-list li label');
//     expect(updatedText).toBe('Updated Task with Enter');
//   })

//   // 12. Edit todo with empty text
//   test('Edit todo with empty text', async({page}) =>{
//     await addTodo(page,'Test 1')
//     await page.dblclick('.todo-list li label')
//     await page.fill('.edit', '')
//     await page.press('.edit', 'Enter');
//     await expect(page.locator('.todo-list')).toHaveCount(0);

//   })

//   // 13. Toggle all todos
//   test('Toggle all todos', async ({page}) => {
//     await addTodo(page, 'Test 1')
//     await addTodo(page, 'Test 2')
//     await page.getByText('Mark all as complete').click()
//   })
});
