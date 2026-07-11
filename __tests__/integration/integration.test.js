const {describe, test, expect} = require ('@jest/globals')
const sequelize = require ("../../src/database")
const ServiceOrganization = require ("../../src/service/organization")


describe("Teste de Organização", () => {

    let transaction

    beforeAll(async () => {
        transaction = await sequelize.transaction()
    })

    afterAll(async () => {
        transaction.rollBack();
        await sequelize.close();
    })

    test("Criar uma organização", async() => {
        const name = "test"
        const address = "Rua 123"
        const phone = "4778945"
        const email = "test@email.com"

        const organization = ServiceOrganization.Create(name, address, phone, email, transaction)
        console.log(organization)

        expect(organization.name).toBe(name)
        expect(organization.address).toBe(address)
        expect(organization.phone).toBe(phone)
        expect(organization.email).toBe(email)
    })


})

