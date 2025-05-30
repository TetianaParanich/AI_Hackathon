const baseURL = Cypress.env('baseURL');

export const apiRequest = ({
  endpoint,
  authToken,
  failOnStatusCode = true
}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };

  return cy.request({
    method: 'GET',
    url: `${baseURL}/${endpoint}`,
    headers: defaultHeaders,
    failOnStatusCode: failOnStatusCode,
  });
};
