import { test, expect } from "@playwright/test";
import tags from "../testdata/tags.json";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/tags", async (route) => {
    console.log("Mocking the tags API response.");
    await route.fulfill({
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tags),
    });
  });

  await page.goto("https://conduit.bondaracademy.com/");
  //https://conduit-api.bondaracademy.com/
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
  await page.route("*/**/api/articles*", async (route) => {
    const response = await route.fetch();

    const responseBody = await response.json();
    responseBody.articles[0].title = "this is Mock test title";
    responseBody.articles[0].description = "this is Mock description";

    await route.fulfill({
      body: JSON.stringify(responseBody),
    });
  });
  await expect(page.locator("app-article-list h1").first()).toContainText(
    "this is test"
  );
});

test("delete test", async ({ page, request }) => {
  const response = await request.post(
    "https://conduit-api.bondaracademy.com/api/users/login",
    {
      //in Playwright body of request is called as data
      data: {
        "user": { "email": "pwtestrash@gmail.com", "password": "pwtestrash" },
      },
    }
  );

  const responseBody = await response.json();
  const accesToken = responseBody.user.token;

  const articleResponse =await request.post("https://conduit-api.bondaracademy.com/api/articles/", {
    data: {
      "article": {
        "title": "Hello from API",
        "description": "HELLO FROM API",
        "body": "body desc",
      
      },
    },
    headers:{
        Authorization: `Token ${accesToken}`
    }
  });
  //expect(articleResponse.status()).toEqual(201);
});
