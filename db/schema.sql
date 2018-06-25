
CREATE DATABASE IF NOT EXISTS win;

USE win;

CREATE TABLE resources (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    location VARCHAR(5),
    address VARCHAR(100),
    website VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(100),
    housing INTEGER(1),
    domestic_violence INTEGER(1),
    food INTEGER(1),
    clothing INTEGER(1),
    babysitting INTEGER(1),
    doctor_visit INTEGER(1),
    medicine INTEGER(1),
    infant_items INTEGER(1),
    daycare INTEGER(1),
    auto_repair INTEGER(1),
    bus_pass INTEGER(1),
    other_transport INTEGER(1),
    furniture INTEGER(1),
    employment INTEGER(1),
    legal_aide INTEGER(1),
    school_supplies INTEGER(1),
	education_assistance INTEGER(1),
    drug_addiction INTEGER(1),
    internet_phone_tech INTEGER(1),
    immigration_assist INTEGER(1),
    item_name VARCHAR(100),
    item description VARCHAR(1000),
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
    );
    


