exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('albums').del(),

    // Inserts seed entries
    knex('albums').insert({
            id: 1,
            artist: 'Kendrick Lamar',
            name: 'To Pimp or Butterfly',
            genre: 'Hip Hop',
            stars: 5,
            explicit: true
        }),
    knex('albums').insert({
            id: 2,
            artist: 'J. Cole',
            name: '2014 Forest Hill Drive',
            genre: 'Hip Hop',
            stars: 4,
            explicit: true
        }),
    knex('albums').insert({
            id: 3,
            artist: 'Nsync',
            name: 'No Strings Attached',
            genre: 'Pop',
            stars: 5,
            explicit: false
        }),
    knex('albums').insert({
            id: 4,
            artist: 'Michael Jackson',
            name: 'Invincible',
            genre: 'Pop',
            stars: 4,
            explicit: true
        })

  );
};

