import { faker } from '@faker-js/faker'

describe('Create Issue via API', () => {
    
    beforeEach(() => cy.api_removeAllProjects())

    it('successfully', () => {

        const issue = {
            title: `issue-${faker.datatype.uuid()}`,
            description: faker.random.words(10),
            project: {
                name: `project-${faker.datatype.uuid()}`,
                description: faker.random.words(10)
            }
        }
            
        cy.api_createIssue(issue)
                .then(response => {
                    expect(response.status).to.equal(201)
                    expect(response.body.title).to.equal(issue.title)
                    expect(response.body.description).to.equal(issue.description)
        })       

    })

})