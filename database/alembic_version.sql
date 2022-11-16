create table alembic_version
(
    version_num varchar(32) not null
        primary key
);

INSERT INTO db.alembic_version (version_num) VALUES
	 ('df0fcd99395b');