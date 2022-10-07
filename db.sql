-- PostgreSQL database dump


-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

-- --
-- -- Name: recent_search; Type: TABLE; Schema: public; Owner: kimberlydang
-- --

-- CREATE TABLE public.recent_search (
--     id integer NOT NULL,
--     location character varying(50) NOT NULL,
--     temp integer,
--     lat integer,
--     lon integer
-- );


-- ALTER TABLE public.recent_search OWNER TO kimberlydang;

-- --
-- -- Name: recent_search_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
-- --

-- CREATE SEQUENCE public.recent_search_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.recent_search_id_seq OWNER TO kimberlydang;

-- --
-- -- Name: recent_search_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
-- --

-- ALTER SEQUENCE public.recent_search_id_seq OWNED BY public.recent_search.id;


-- --
-- -- Name: recent_search id; Type: DEFAULT; Schema: public; Owner: kimberlydang
-- --

-- ALTER TABLE ONLY public.recent_search ALTER COLUMN id SET DEFAULT nextval('public.recent_search_id_seq'::regclass);


-- --
-- -- Data for Name: recent_search; Type: TABLE DATA; Schema: public; Owner: kimberlydang
-- --

-- COPY public.recent_search (id, location, temp, lat, lon) FROM stdin;
-- 1	SAN DIEGO	67	32	32
-- 2	HOUSTON	86	28	28
-- 3	NEW YORK CITY	73	40	40
-- 4	Irvine	74	34	-118
-- 5	Northridge	78	34	-119
-- 6	Lake Forest	69	34	34
-- 7	Laguna Hills	69	34	34
-- 8	San Diego	67	33	33
-- 9	San Diego	67	33	33
-- 10	San Diego	68	33	33
-- 11	Abie	51	41	41
-- 12	Los Angeles	68	-118	34
-- 13	Watsonville	58	-122	37
-- \.


-- --
-- -- Name: recent_search_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
-- --

-- SELECT pg_catalog.setval('public.recent_search_id_seq', 13, true);


-- --
-- -- Name: recent_search recent_search_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
-- --

-- ALTER TABLE ONLY public.recent_search
--     ADD CONSTRAINT recent_search_pkey PRIMARY KEY (id);


-- --
-- -- PostgreSQL database dump complete
-- --
