/// <reference types="cypress" />
describe('Actividad complementaria 8', () => {
  // Tipo de peticion post
  // URL https://pushing-it.onrender.com/api/register
  // body {username, password, gender, year, month, day}
  // Agregar aserciones para verificar status y body
  it('Peticion Post', () => {
    const username = 'usuario' + Math.floor(Math.random() * 1000);
    const password = `123456!`;
    const gender = "Female";
    const day = '06';
    const month = 'August';
    const year = "1989";
    cy.request({
      url: 'https://pushing-it.onrender.com/api/register',
      method: 'POST',
      body: {
        username: username,
        password: password,
        gender: gender,
        day: day,
        month: month,
        year: year
      }
    }).then(respuesta => {
      cy.log(respuesta);
      expect(respuesta.status).equal(200);
      expect(respuesta.body.newUser.username).equal(username);
    });
  });
});
