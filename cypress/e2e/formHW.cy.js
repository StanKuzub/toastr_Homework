describe('mocha Homework', () => {
  const testData = {
    inlineForm: {
      name: "Adam Smith",
      email: "thisIsMyEmail@myemail.com"
    },
    gridForm: {
      email: "thisIsMyGridEmail@myemail.com",
      password: "thisIsMyGridPassword"
    },
    basicForm: {
      email: "thisIsMyBasicEmail@myemail.com",
      password: "thisIsMyBasicPassword"
    },
    formWithoutLabels: {
      recipients: "Adam, Mark, James",
      subject: "This is an email subject",
      message: "Hello World!"
    },
    blockForm: {
      firstName: "FirstName",
      lastName: "LastName",
      email: "FirstName.LastName@email.com",
      website: "www.website.com"
    },
    horizontalForm: {
      email: "thisIsMyhorizontalFormEmailEmail@myemail.com",
      password: "thisIsMyhorizontalFormEmailPassword"
    }
  };

  it('Search with parametrized data', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src$="material-light-theme.jpg"]').click();

    cy.contains('Forms').click({ force: true });
    cy.contains('Form Layouts').click();

    // Inline Form
    cy.get('input[placeholder="Jane Doe"]').type(testData.inlineForm.name, { force: true });
    cy.get('input[placeholder="Email"][type="text"]').type(testData.inlineForm.email);

    // Grid Form
    cy.get('#inputEmail').type(testData.gridForm.email);
    cy.get('#inputPassword2').type(testData.gridForm.password);

    // Basic Form
    cy.get('#exampleInputEmail1').type(testData.basicForm.email);
    cy.get('#exampleInputPassword1').type(testData.basicForm.password);

    // Form Without Labels
    cy.get('input[placeholder="Recipients"]').type(testData.formWithoutLabels.recipients);
    cy.get('input[placeholder="Subject"]').type(testData.formWithoutLabels.subject);
    cy.get('textarea[placeholder="Message"]').type(testData.formWithoutLabels.message, { force: true });

    // Block Form
    cy.get('#inputFirstName').type(testData.blockForm.firstName);
    cy.get('#inputLastName').type(testData.blockForm.lastName);
    cy.get('#inputEmail').type(testData.blockForm.email);
    cy.get('#inputWebsite').type(testData.blockForm.website);

    // Horizontal Form
    cy.get('#inputEmail3').type(testData.horizontalForm.email);
    cy.get('#inputPassword3').type(testData.horizontalForm.password);
  });
});
