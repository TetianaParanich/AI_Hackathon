import { getApiRequest, postApiRequest } from '../../core/utils/apiClient';

export const getAgents = (endpoint) => {
  const apiToken = Cypress.env('apiToken');

  return getApiRequest({
    endpoint,
    authToken: apiToken,
  }).then((response) => {
    return response;
  });
};

export const updateAgent = (endpoint, body) => {
  const apiToken = Cypress.env('apiToken');

  return postApiRequest({
    endpoint,
    body,
    authToken: apiToken,
  }).then((response) => {
    return response;
  });
};