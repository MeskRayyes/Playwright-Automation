
import { test, expect } from '@playwright/test';

const API_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Automation Tests', () => {

  test('GET - should retrieve a post successfully', async ({ request }) => {
    const response = await request.get(`${API_URL}/posts/1`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.title).toBeTruthy();
  });

  test('POST - should create a new post', async ({ request }) => {
    const response = await request.post(`${API_URL}/posts`, {
      data: {
        title: 'Playwright API Testing',
        body: 'Learning API automation with Playwright',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.title).toBe('Playwright API Testing');
    expect(responseBody.body).toBe('Learning API automation with Playwright');
    expect(responseBody.userId).toBe(1);
    expect(responseBody.id).toBeTruthy();
  });

  test('PUT - should update an existing post', async ({ request }) => {
    const response = await request.put(`${API_URL}/posts/1`, {
      data: {
        id: 1,
        title: 'Updated Playwright Title',
        body: 'Updated post content',
        userId: 1,
      },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.title).toBe('Updated Playwright Title');
    expect(responseBody.body).toBe('Updated post content');
  });

  test('DELETE - should delete a post successfully', async ({ request }) => {
    const response = await request.delete(`${API_URL}/posts/1`);

    expect(response.status()).toBe(200);
  });

});
