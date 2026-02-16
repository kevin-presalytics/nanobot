import { computeHealthPayload } from './server.js';

const cases = [
  {
    name: 'healthy when connected with authed client',
    whatsappConnected: true,
    authedClients: 1,
    expected: {
      status: 'healthy',
      whatsapp: 'connected',
      authedClients: 1,
    },
  },
  {
    name: 'healthy when no authed clients',
    whatsappConnected: true,
    authedClients: 0,
    expected: {
      status: 'healthy',
      whatsapp: 'connected',
      authedClients: 0,
    },
  },
  {
    name: 'unhealthy when whatsapp disconnected',
    whatsappConnected: false,
    authedClients: 2,
    expected: {
      status: 'unhealthy',
      whatsapp: 'disconnected',
      authedClients: 2,
    },
  },
];

const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};

for (const testCase of cases) {
  const result = computeHealthPayload(testCase.whatsappConnected, testCase.authedClients);
  assert(
    result.status === testCase.expected.status,
    `${testCase.name}: expected status ${testCase.expected.status}, got ${result.status}`,
  );
  assert(
    result.whatsapp === testCase.expected.whatsapp,
    `${testCase.name}: expected whatsapp ${testCase.expected.whatsapp}, got ${result.whatsapp}`,
  );
  assert(
    result.authedClients === testCase.expected.authedClients,
    `${testCase.name}: expected authedClients ${testCase.expected.authedClients}, got ${result.authedClients}`,
  );
}
