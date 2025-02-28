import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'tool-remelda',
  clientId: 'cdm-client',
  clientSecret: 'ZV7Qxedcj7NT6Sb2AoAUrUVuk4XLLDaH',
};

const keycloak = new Keycloak({
  ...keycloakConfig,
  credentials: {
    secret: keycloakConfig.clientSecret,
  },
});

export default keycloak;
