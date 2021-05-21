# Lab8_Starter
Collaborators: Elias Fang, Kyle Hu

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter) . 
1 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, since in order to verify that the message feature works, we need to be able to determine whether the other user has received the message, which we cannot do.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
Yes, because the "max messsage length" feature can be implemented with very little code. As a result, it would be easy to test with a unit test because it is at a smaller scale and can be executed quickly.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
We would expect that puppeteer would run the tests without using a browser. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
```javascript
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.click('body > header > img');
    await page.waitForTimeout(500);
});
```