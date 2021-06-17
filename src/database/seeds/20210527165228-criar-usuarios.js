const bcryptjs = require('bcryptjs');
// seeds server  pra incluir varios usuarios na base de dados
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Marcos',
        email: 'marcos@example.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'John',
        email: 'john@example.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'Felipe',
        email: 'Felipe@example.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
    ],
    {},
  ),

  down: () => {},
};
