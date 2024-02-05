describe('Toast Homework', () => {
  const topLeftSuccess = {
    title: "This is a new title",
    content: "This is a new content",
    time: "5000",
    toastPosition: '[ng-reflect-value="top-left"]',
    toastType: '#nb-option-33',
    toastIcon: '[data-name="checkmark"]',
    toaster: '.status-success.has-icon.custom-icon.ng-star-inserted',
    backgroundColor: 'rgb(96, 175, 32)'
  };

  const bottomRightWarning = {
    title: "This is a new title 2",
    content: "This is a new content 2",
    time: "6000",
    toastPosition: '#nb-option-27',
    toastType: '#nb-option-35',
    toastIcon: '[data-name="alert-triangle"]',
    toaster: '.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-warning.destroy-by-click.has-icon.custom-icon.ng-star-inserted',
    backgroundColor: 'rgb(255, 159, 5)',

  };

  const bottomLeftDanger = {
    title: "This is a new title 3",
    content: "This is a new content 3",
    time: "7000",
    toastPosition: '#nb-option-26',
    toastType: '#nb-option-36',
    toastIcon: '[data-name="flash"]',
    toaster: '.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-danger.destroy-by-click.has-icon.custom-icon.ng-star-inserted',
    backgroundColor: 'rgb(176, 0, 32)'

  };

  const topRightInfo = {
    title: "This is a new title 4",
    content: "This is a new content 4",
    time: "8000",
    toastPosition: '#nb-option-24',
    toastType: '#nb-option-34',
    toastIcon: '[data-name="question-mark"]',
    toaster: '.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-info.destroy-by-click.has-icon.custom-icon.ng-star-inserted',
    backgroundColor: 'rgb(4, 149, 238)'

  };

  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  });

  it('Position: Top-Left, Type: Success', () => {
    performToastTest(topLeftSuccess);
  });

  it('Position: Bottom-Right, Type: Warning', () => {
    performToastTest(bottomRightWarning);
  });

  it('Position: Bottom-Left, Type: Danger', () => {
    performToastTest(bottomLeftDanger);
  });

  it('Position: Top-Right, Type: Info', () => {
    performToastTest(topRightInfo);
  });
});

function performToastTest(data) {
  cy.get('[src$="material-light-theme.jpg"]').click();
  cy.get('span').contains('Modal & Overlays').click({ force: true });
  cy.get('span').contains('Toastr').click();
  cy.get('.select-button').contains('top-right').click();
  cy.get(data.toastPosition).click();
  cy.get('[ng-reflect-name="title"]').clear().type(data.title);
  cy.get('[ng-reflect-name="title"]').should('have.value', data.title);
  cy.get('[ng-reflect-model="I\'m cool toaster!"]').clear().type(data.content);
  cy.get('input[name="content"]').should('have.value', data.content);
  cy.get('input[name="timeout"]').clear().type(data.time);
  cy.get('input[name="timeout"]').should('have.value', data.time);
  cy.get('.select-button').contains('primary').click();
  cy.get(data.toastType).click();
  cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
  cy.get(data.toastIcon).should('exist');
  cy.get(data.toaster)
    .should('have.css', 'background-color', data.backgroundColor);
}