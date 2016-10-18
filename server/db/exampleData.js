var users = [
  {
    username: 'me',
    review_count: 1
  },
  {
    username: 'another_user',
    review_count: 1
  }
];

var landlords = [
  {
    first_name: 'Mr.',
    last_name: 'Shickadance',
    stars: 1,
    review_count: 1
  },
  {
    first_name: 'Mr.',
    last_name: 'Heckles',
    stars: 3,
    review_count: 1
  }
];

var rentals = [
  {
    landlord_id: 1,
    street: '123 Fake Street',
    city: 'Miami',
    state: 'FL',
    zipcode: 12345,
    stars: 2,
    review_count: 1
  },
  {
    landlord_id: 2,
    street: '1 Nice Street',
    city: 'New York',
    state: 'NY',
    zipcode: 45678,
    stars: 5,
    review_count: 1
  }
];

var reviews = [
  {
    landlord_id: 1,
    rental_id: 1,
    user_id: 1,
    review_text: 'This place smelled like a petting zoo.',
    date_start: '2014-08-01',
    date_end: '2015-08-01',
    stars_landlord: 1,
    stars_rental: 2
  },
  {
    landlord_id: 2,
    rental_id: 2,
    user_id: 2,
    review_text: 'The place is huge, and my neighbors are great.',
    date_start: '1999-01-01',
    date_end: '2004-01-01',
    stars_landlord: 3,
    stars_rental: 5
  }
];
