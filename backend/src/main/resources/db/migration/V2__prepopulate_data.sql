insert into countries (name, continent)
values ('United Kingdom', 'Europe'),
       ('United States', 'North America'),
       ('France', 'Europe'),
       ('Germany', 'Europe'),
       ('Russia', 'Europe/Asia'),
       ('Brazil', 'South America'),
       ('Japan', 'Asia');

insert into states (state)
values ('GOOD'),
       ('BAD');

insert into categories (name, description)
values ('NOVEL', 'Fictional narrative and prose'),
       ('THRILLER', 'Suspense and high-stakes excitement'),
       ('HISTORY', 'Historical records and events'),
       ('FANTASY', 'Magic and supernatural elements'),
       ('BIOGRAPHY', 'Life stories and memoirs'),
       ('CLASSICS', 'Exemplary literature and canon'),
       ('DRAMA', 'Narrative intended for theatrical performance');

insert into authors (created_at, updated_at, name, surname, country_id)
values (now(), now(), 'George', 'Orwell', 1),
       (now(), now(), 'Stephen', 'King', 2),
       (now(), now(), 'J.R.R.', 'Tolkien', 1),
       (now(), now(), 'Alexandre', 'Dumas', 3),
       (now(), now(), 'Fyodor', 'Dostoevsky', 5),
       (now(), now(), 'Agatha', 'Christie', 1),
       (now(), now(), 'William', 'Shakespeare', 1),
       (now(), now(), 'Walter', 'Isaacson', 2),
       (now(), now(), 'Barbara', 'Tuchman', 2);

insert into books (created_at, updated_at, name, category_id, state_id, available_copies)
values (now(), now(), '1984', 6, 1, 10),
       (now(), now(), 'The Shining', 2, 1, 4),
       (now(), now(), 'The Hobbit', 4, 1, 7),
       (now(), now(), 'The Count of Monte Cristo', 1, 1, 3),
       (now(), now(), 'Crime and Punishment', 6, 2, 1),
       (now(), now(), 'Murder on the Orient Express', 2, 1, 6),
       (now(), now(), 'Hamlet', 7, 1, 12),
       (now(), now(), 'Steve Jobs', 5, 1, 5),
       (now(), now(), 'A Distant Mirror', 3, 2, 2),
       (now(), now(), 'The Guns of August', 3, 1, 4),
       (now(), now(), 'Pet Sematary', 2, 2, 0);

insert into books_authors (book_id, author_id)
values (1, 1),
       (2, 2),
       (2, 1),
       (2, 3),
       (2, 8),
       (3, 3),
       (4, 4),
       (5, 5),
       (5, 2),
       (6, 1),
       (6, 3),
       (6, 5),
       (6, 6),
       (6, 2),
       (7, 7),
       (8, 8),
       (8, 7),
       (8, 5),
       (9, 9),
       (10, 9),
       (10, 1),
       (11, 2);