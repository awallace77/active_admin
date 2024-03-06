CREATE DATABASE fitness_app; -- Table: public.member

-- Member table
DROP TABLE IF EXISTS public.member;
CREATE TABLE member (
  member_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  registration_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);