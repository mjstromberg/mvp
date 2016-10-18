CREATE DATABASE rentocracy;

USE rentocracy;

DROP TABLE IF EXISTS `Reviews`;
    
CREATE TABLE `Reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `landlord_id` INTEGER NOT NULL,
  `rental_id` INTEGER NOT NULL,
  `user_id` INTEGER NOT NULL,
  `review_text` VARCHAR(10000) NULL DEFAULT 'No Review Provided',
  `date_start` DATE NULL,
  `date_end` DATE NULL,
  `stars_landlord` INTEGER NOT NULL DEFAULT 1,
  `stars_rental` INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `Landlords`;
    
CREATE TABLE `Landlords` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `stars` DECIMAL NOT NULL DEFAULT 1,
  `review_count` INTEGER NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `Rentals`;
    
CREATE TABLE `Rentals` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `landlord_id` INTEGER NOT NULL,
  `street` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(2) NOT NULL,
  `zipcode` INTEGER(5) NOT NULL,
  `stars` INTEGER NOT NULL DEFAULT 1,
  `review_count` INTEGER NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `review_count` INTEGER NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);


ALTER TABLE `Reviews` ADD FOREIGN KEY (landlord_id) REFERENCES `Landlords` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (rental_id) REFERENCES `Rentals` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `Rentals` ADD FOREIGN KEY (landlord_id) REFERENCES `Landlords` (`id`);

INSERT INTO `Users` (username, review_count) VALUES ('ace_ventura1', 1);
INSERT INTO `Users` (username, review_count) VALUES ('clean_freak_monica42', 1);

INSERT INTO `Landlords` (first_name, last_name, stars, review_count) VALUES ('Mr.', 'Shickadance', 1, 1);
INSERT INTO `Landlords` (first_name, last_name, stars, review_count) VALUES ('Mr.', 'Heckles', 3, 1);

INSERT INTO `Rentals` (landlord_id, street, city, state, zipcode, stars, review_count) VALUES (1, '124 Fake Street', 'Miami', 'FL', 12345, 2, 1);
INSERT INTO `Rentals` (landlord_id, street, city, state, zipcode, stars, review_count) VALUES (2, '1 Nice Street', 'New York', 'NY', 45678, 5, 1);

INSERT INTO `Reviews` (landlord_id, rental_id, user_id, review_text, date_start, date_end, stars_landlord, stars_rental) VALUES (1, 1, 1, 'This landlord let me keep all of my animals.', '2014-08-01', '2015-08-01', 1, 2);
INSERT INTO `Reviews` (landlord_id, rental_id, user_id, review_text, date_start, date_end, stars_landlord, stars_rental) VALUES (2, 2, 2, 'The landlord was okay, but he wouldn\'t fix my furnace.', '1999-01-01', '2004-01-01', 3, 5);

-- Execute from command line to create the database and the tables:
--   mysql -u root < server/schema.sql














