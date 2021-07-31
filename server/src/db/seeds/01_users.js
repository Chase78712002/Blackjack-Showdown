
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'batman', password: '$2b$12$9BFc40RhWUmeY896/kENiOKMmxukROogHcBIzwVBZc/YaVKIN.UK.', email: 'man@batcave.com', profile_img_url: '', coins: 9999},
        {id: 2, username: 'pikachu', password: '$2b$12$9BFc40RhWUmeY896/kENiOKMmxukROogHcBIzwVBZc/YaVKIN.UK.', email: 'mouse@ViridianForest.com', profile_img_url: '', coins: 10},
        {id: 3, username: 'joker', password: '$2b$12$9BFc40RhWUmeY896/kENiOKMmxukROogHcBIzwVBZc/YaVKIN.UK.', email: 'protagonist@P5.com', profile_img_url: '', coins: 180},
      ]);
    });
};
