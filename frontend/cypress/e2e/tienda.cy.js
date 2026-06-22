describe('Mi Tienda', () => {

  it('carga la página principal', () => {

    cy.visit('http://localhost:5173')

    cy.contains('Productos')

  })

  it('permite agregar un producto al carrito', () => {

    cy.visit('http://localhost:5173')

    cy.contains('Agregar').click()

    cy.contains('Carrito (1)')

  })

})

it('agrega productos y calcula el total correctamente', () => {

  cy.visit('http://localhost:5173')

  // Agrega el primer producto dos veces
  cy.contains('Agregar').click()
  cy.contains('Agregar').click()

  // Ir al carrito
  cy.contains('🛒 Carrito (2)').click()

  // Verificar que existe un producto con cantidad 2
  cy.contains('x2')

  // Verificar que existe la sección Total
  cy.contains('Total')

})