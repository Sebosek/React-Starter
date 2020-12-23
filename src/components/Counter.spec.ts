export {};

context('Counter component functionality', () => {
  it('Should show init state when visit the app', () => {
    cy.visit('/');

    cy.get('[data-ui-test=count]').should('exist');
    cy.get('[data-ui-test=count]').contains('0');
  });
});
