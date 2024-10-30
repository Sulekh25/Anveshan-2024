{
  "baseUrl": "http://localhost:3000",
  "integrationFolder": "cypress/integration",
  "supportFile": "cypress/support/index.js"
} 

describe('Hello World Test', () => {
  it('should display hello world', () => {
    cy.visit('/');
    cy.contains('Hello World');
  });
});