DROP TABLE IF EXISTS view_tracking;

CREATE TABLE IF NOT EXISTS view_tracking
(article_id CHAR(13) PRIMARY KEY, view_count INT);

INSERT INTO view_tracking (article_id, view_count) values ('1692667782462', 1);
