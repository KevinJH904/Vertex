
-- Crear la base de datos
DROP DATABASE IF EXISTS db_prueba;
CREATE DATABASE db_prueba;

-- Conectarse a la base de datos recién creada
\c db_prueba;

-- Crear tabla users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    profile_image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Crear tabla posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_image_url VARCHAR(1000),
    caption TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- datos de prueba

INSERT INTO users (username, profile_image_url)
VALUES 
('John Michael', 'assets/images/users/user-1.jpg');

INSERT INTO posts (user_id, post_image_url, caption)
VALUES 
(1, 'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/56161887_588993861570433_2896723195090436096_n.jpg?_nc_cat=103&_nc_eui2=AeFI0UuTq3uUF_TLEbnZwM-qSRtgOu0HE2JPwW6b4hIki73-2OWYhc7L1MPsYl9cYy-w122CCak-Fxj0TE1a-kjsd-KXzh5QsuvxbW_mg9qqtg&_nc_ht=scontent.fevn1-2.fna&oh=ea44bffa38f368f98f0553c5cef8e455&oe=5D050B05', 
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatem veritatis harum, tenetur, quibusdam voluptatum, incidunt saepe minus ma');

