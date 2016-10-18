DROP TABLE IF EXISTS `Reviews`;
    
CREATE TABLE `Reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `landlord_id` INTEGER NOT NULL,
  `rental_id` INTEGER NOT NULL,
  `user_id` INTEGER NOT NULL,
  `text` VARCHAR(10000) NULL DEFAULT 'No Review Provided',
  `date_start` DATE NULL,
  `date_end` DATE NULL,
  `stars` INTEGER NOT NULL DEFAULT 1,
  `review_count` INTEGER NULL DEFAULT 0,
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
