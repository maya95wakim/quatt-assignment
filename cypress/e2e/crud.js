import user from '../fixtures/user.json'
const token = 'Bearer ddf7819fee4b4a8300136625aaffb375044915683629f1bedff459d0932a30d1'

describe('Successful user CRUD', () => {
    let id
    it('Should create a new user with valid data', () => {
        cy.request({
            method: 'POST',
            url: 'users',
            body: user.newUser,
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
            .then(res => {
                expect(res.body.name).to.equal(user.newUser.name)
                expect(res.body.email).to.equal(user.newUser.email)
                expect(res.body.gender).to.equal(user.newUser.gender)
                expect(res.body.status).to.equal(user.newUser.status)
                id = res.body.id
            })
    })
    it('Should get a user with all its data', () => {
        cy.request({
            method: 'GET',
            url: `users/${id}`,
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
            .then(res => {
                expect(res.body.name).to.equal(user.newUser.name)
                expect(res.body.email).to.equal(user.newUser.email)
                expect(res.body.gender).to.equal(user.newUser.gender)
                expect(res.body.status).to.equal(user.newUser.status)
                id = res.body.id
            })
    })
    it('Should update an existing user', () => {
        cy.request({
            method: 'PUT',
            url: `users/${id}`,
            body: user.updateUser,
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
            .its('body')
            .then(body => {
                expect(body.name).to.equal(user.updateUser.name)
                expect(body.email).to.equal(user.updateUser.email)
                expect(body.gender).to.equal(user.updateUser.gender)
                expect(body.status).to.equal(user.updateUser.status)
            })
    })
    it('Should delete an existing user and give a 204 status', () => {
        cy.request({
            method: 'DELETE',
            url: `users/${id}`,
            body: user,
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
            .then(res => {
                expect(res.status).to.equal(204)
            })
    })
    it('Should check if the deleted users has been actually deleted', () => {
        cy.request({
            method: 'GET',
            url: `users/${id}`,
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
            .then(res => {
                expect(res.body.message).to.equal('Resource not found')
                expect(res.status).to.equal(404)
            })
    })
})
describe('Negative test for CRUD operations', () => {
    it('Should get an error message to create a new user with Unauthorized token', () => {
        cy.request({
            method: 'POST',
            url: 'users',
            body: user.newUser,
            failOnStatusCode: false
        })
            .then(res => {
                expect(res.body.message).to.equal("Authentication failed")
                expect(res.status).to.equal(401)
            })
    })
    it('Should get error messages for the invalid fields (gender, status, email)', () => {
        cy.request({
            method: 'POST',
            url: 'users',
            body: user.unvalidUser,
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
        .its('body')
            .then(bodies => {
                bodies.forEach(body => {
                    if (body.field=="gender") {
                        expect(body.message).to.equal("can't be blank, can be male of female")
                    }
                    if (body.field=="status") {
                        expect(body.message).to.equal("can't be blank")
                    }
                    if (body.field=="email") {
                        expect(body.message).to.equal("is invalid")
                    }
                });
            })
    })
    it('Should get error messages when try to delete a not existing user', () => {
        cy.request({
            method: 'Delete',
            url: 'users/00',
            headers: {
                authorization: token,
            },
            failOnStatusCode: false
        })
        .then(res=>{
          expect(res.body.message).to.equal("Resource not found")
          expect(res.status).to.equal(404)
        })
    })
})