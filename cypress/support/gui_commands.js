Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    const login = () => {
        cy.visit('/users/sign_in')
        cy.get('[data-qa-selector="login_field"]').type(user)
        cy.get('[data-qa-selector="password_field"]').type(password, {log:false})

        cy.get('[data-qa-selector="sign_in_button"]').click()

    }
    login()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-qa-selector="user_menu"]').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()

})

Cypress.Commands.add('gui_removeProject', project => {
    cy.get('.qa-settings-item').click()
    cy.get('#js-project-advanced-settings').find('.js-settings-toggle').click()
    cy.contains('Remove project').click()
    cy.get('#confirm_name_input').type(project.name)
    cy.get('.qa-confirm-button').click()
})