const baseURL = Cypress.env('baseURL');

export const getApiRequest = ({
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

export const postApiRequest = ({
  endpoint,
  authToken,
  body,
  failOnStatusCode = true
}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };

  return cy.request({
    method: 'POST',
    url: `${baseURL}/${endpoint}`,
    headers: defaultHeaders,
    body: body,
    failOnStatusCode: failOnStatusCode,
  });
};
