import { faker } from '@faker-js/faker'

describe('Create Project', () => {

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(10),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(10)

        }
    }

    beforeEach(() => {
        cy.login()
        cy.gui_createProject(issue.project)
    })

    it('successfully', () => {

        cy.gui_createIssue(issue)
        
        cy.get('.issue-details').should('contain', issue.title).and('contain', issue.description)

    })

})