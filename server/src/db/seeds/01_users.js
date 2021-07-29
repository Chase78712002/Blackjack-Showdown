
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'batman', password: '1234@Home', email: 'man@cave.com', profile_img_url: '', coins: 9999},
        {id: 2, username: 'pikachu', password: '1234@Home', email: 'mouse@ViridianForest.com', profile_img_url: '', coins: 10},
        {id: 3, username: 'joker', password: '1234@Home', email: 'protagonist@P5.com', profile_img_url: '', coins: 180},
      ]);
    });
};
