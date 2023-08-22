--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

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

--
-- Name: spieler_tbl; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spieler_tbl (
    s_id integer NOT NULL,
    vorname character varying NOT NULL,
    nachname character varying NOT NULL,
    profilbild_url text DEFAULT 'https://img.freepik.com/vektoren-premium/mann-avatar-profilbild-vektor-illustration_268834-538.jpg?w=2000'::text NOT NULL,
    isadmin boolean DEFAULT false,
    passwort text
);


ALTER TABLE public.spieler_tbl OWNER TO postgres;

--
-- Name: spieler_tbl_s_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spieler_tbl_s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spieler_tbl_s_id_seq OWNER TO postgres;

--
-- Name: spieler_tbl_s_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spieler_tbl_s_id_seq OWNED BY public.spieler_tbl.s_id;


--
-- Name: zahlungen_tbl; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zahlungen_tbl (
    z_id integer NOT NULL,
    bezahlt boolean DEFAULT false,
    barzahlung boolean DEFAULT false,
    fk_s_id integer,
    betrag numeric NOT NULL,
    grund character varying DEFAULT 'Fehlverhalten'::character varying,
    zeitpunkt timestamp without time zone
);


ALTER TABLE public.zahlungen_tbl OWNER TO postgres;

--
-- Name: zahlungen_tbl_z_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.zahlungen_tbl_z_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.zahlungen_tbl_z_id_seq OWNER TO postgres;

--
-- Name: zahlungen_tbl_z_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.zahlungen_tbl_z_id_seq OWNED BY public.zahlungen_tbl.z_id;


--
-- Name: spieler_tbl s_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spieler_tbl ALTER COLUMN s_id SET DEFAULT nextval('public.spieler_tbl_s_id_seq'::regclass);


--
-- Name: zahlungen_tbl z_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zahlungen_tbl ALTER COLUMN z_id SET DEFAULT nextval('public.zahlungen_tbl_z_id_seq'::regclass);


--
-- Data for Name: spieler_tbl; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort) VALUES (1, 'Lukas', 'Semler', 'https://img.freepik.com/vektoren-premium/mann-avatar-profilbild-vektor-illustration_268834-538.jpg?w=2000', true, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort) VALUES (3, 'Max', 'Schuller', 'https://img.freepik.com/vektoren-premium/mann-avatar-profilbild-vektor-illustration_268834-538.jpg?w=2000', false, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort) VALUES (2, 'Benjamin', 'Stauf', 'https://www.oefb.at/bewerbe/oefb2/person/images/1278650591628556536_e42d9342d367e3f7ed69-1,0-600x315-600x315.png
', false, NULL);


--
-- Data for Name: zahlungen_tbl; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt) VALUES (5, false, true, 2, 4, 'Fehlverhalten', '2023-08-18 19:20:12');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt) VALUES (6, false, false, 3, 99.99, 'Fetzerei', '2023-08-15 18:30:12');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt) VALUES (4, true, false, 2, 31.99, 'Fehlverhalten', '2023-07-15 18:00:12');


--
-- Name: spieler_tbl_s_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.spieler_tbl_s_id_seq', 8, true);


--
-- Name: zahlungen_tbl_z_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.zahlungen_tbl_z_id_seq', 6, true);


--
-- Name: spieler_tbl spieler_tbl_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spieler_tbl
    ADD CONSTRAINT spieler_tbl_pkey PRIMARY KEY (s_id);


--
-- Name: zahlungen_tbl zahlungen_tbl_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zahlungen_tbl
    ADD CONSTRAINT zahlungen_tbl_pkey PRIMARY KEY (z_id);


--
-- Name: zahlungen_tbl zahlungen_tbl_fk_s_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zahlungen_tbl
    ADD CONSTRAINT zahlungen_tbl_fk_s_id_fkey FOREIGN KEY (fk_s_id) REFERENCES public.spieler_tbl(s_id);


--
-- PostgreSQL database dump complete
--

