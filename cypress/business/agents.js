import { apiRequest } from '../core/utils/apiClient';

export const getAgents = (endpoint) => {
  const apiToken = Cypress.env('apiToken');

  return apiRequest({
    endpoint,
    authToken: apiToken,
  }).then((response) => {
    return response;
  });
};