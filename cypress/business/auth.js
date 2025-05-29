import { apiRequest } from '../core/utils/apiClient';

export const login = (username, password) => {
  return apiRequest('POST', '/auth/login', { username, password }).then((response) => {
    // validateStatusCode(response, 200); // Reuse status code validation
    expect(response.body).to.have.property('token');
    return response.body.token;
  });
};