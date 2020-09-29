describe('Request', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays images fetched from unsplash API', () => {
    cy.request('https://api.unsplash.com', {
      params: {
        query: 'nature',
        per_page: 6
      },
      headers: {
        Authorization:
          `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`
      }
    })
      .should((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body).to.have.length(15)
        // expect(response).to.have.property('headers')
        // expect(response).to.have.property('duration')
      })
  })
  it('returns an empty array when an invalid search term is entered', () => {
    cy.request('https://api.unsplash.com', {
      params: {
        query: 'asdfadfcdsfcdcsd',
        per_page: 6
      },
      headers: {
        Authorization:
          `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`
      }
    })
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(0)
      })
  })
})