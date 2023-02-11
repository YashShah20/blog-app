create or replace table users (
	user_id serial primary key,
	name text not null,
	password text
);

create or replace table post (
	post_id serial primary key,
	title text not null,
	description text,
	likes integer,
	user_id integer,
	foreign key (user_id) references users(user_id) on delete cascade
);

create or replace table comment (
	id serial primary key,
	comment text not null,
	post_id integer not null,
	user_id integer not null,
	foreign key (user_id) references users(user_id) on delete cascade,
	foreign key (post_id) references post(post_id) on delete cascade	
);

create or replace table photo (
	id serial primary key,
	url text not null,
	post_id integer not null,
	foreign key (post_id) references post(post_id) on delete cascade
);