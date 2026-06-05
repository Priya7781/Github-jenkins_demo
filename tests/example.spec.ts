import { test, expect } from '@playwright/test';

test('launch login page', async ({ page }) => {
  await page.goto('https://priya7781.github.io/login-page/');

  await expect(page).toHaveURL(/\/login/);

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('1234');
  await page.locator('button[type="submit"]').click();

  await expect(page.locator('#message'))
    .toHaveText('Login Successful!');
});

// test('fetch api details', async ({ request }) => {

//   // Sending a GET request to the specified URL and storing the response in the 'response' variable
//   const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
//   //Extraction of the response object into JSON format
//   const data = await response.json();
//   console.log(data);

//   // Assertion to verify that the response contains the expected tag
//   expect(data.tags).toContain('Test');
// });

// test('to do POST request', async ({ request }) => {


//   const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', { 
//     headers:{
//       Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1MTQwMH0sImlhdCI6MTc4MDE0NTE1NCwiZXhwIjoxNzg1MzI5MTU0fQ.-uLbOZFF7I9dIpZ9yISBynGezo9uT-g6mDNvIW50KN4'
//     },
//     data: {
      
// article: {title: "Test1 TEST", description: "Testabc", body: "Testabc", tagList: []}
//     }
//     });
 
//   const data = await response.json();
//   console.log(data);

//   // // Assertion to verify that the response contains the expected tag
//   // expect(data.tags).toContain('Test');
// });



