--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 16.0

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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: wwuser
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO wwuser;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: wwuser
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ausgaben; Type: TABLE; Schema: public; Owner: wwuser
--

CREATE TABLE public.ausgaben (
    a_id integer NOT NULL,
    amount numeric NOT NULL,
    reason text NOT NULL,
    zeitpunkt date NOT NULL
);


ALTER TABLE public.ausgaben OWNER TO wwuser;

--
-- Name: ausgaben_a_id_seq; Type: SEQUENCE; Schema: public; Owner: wwuser
--

CREATE SEQUENCE public.ausgaben_a_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ausgaben_a_id_seq OWNER TO wwuser;

--
-- Name: ausgaben_a_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wwuser
--

ALTER SEQUENCE public.ausgaben_a_id_seq OWNED BY public.ausgaben.a_id;


--
-- Name: spieler_tbl; Type: TABLE; Schema: public; Owner: wwuser
--

CREATE TABLE public.spieler_tbl (
    s_id integer NOT NULL,
    vorname character varying NOT NULL,
    nachname character varying NOT NULL,
    profilbild_url text DEFAULT 'https://img.freepik.com/vektoren-premium/mann-avatar-profilbild-vektor-illustration_268834-538.jpg?w=2000'::text NOT NULL,
    isadmin boolean DEFAULT false,
    passwort text,
    email text
);


ALTER TABLE public.spieler_tbl OWNER TO wwuser;

--
-- Name: spieler_tbl_s_id_seq; Type: SEQUENCE; Schema: public; Owner: wwuser
--

CREATE SEQUENCE public.spieler_tbl_s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.spieler_tbl_s_id_seq OWNER TO wwuser;

--
-- Name: spieler_tbl_s_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wwuser
--

ALTER SEQUENCE public.spieler_tbl_s_id_seq OWNED BY public.spieler_tbl.s_id;


--
-- Name: suggestion_player; Type: TABLE; Schema: public; Owner: wwuser
--

CREATE TABLE public.suggestion_player (
    sp_id integer NOT NULL,
    fk_player integer,
    fk_suggestion integer,
    bewertung boolean NOT NULL
);


ALTER TABLE public.suggestion_player OWNER TO wwuser;

--
-- Name: suggestionPlayer_sp_id_seq; Type: SEQUENCE; Schema: public; Owner: wwuser
--

CREATE SEQUENCE public."suggestionPlayer_sp_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."suggestionPlayer_sp_id_seq" OWNER TO wwuser;

--
-- Name: suggestionPlayer_sp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wwuser
--

ALTER SEQUENCE public."suggestionPlayer_sp_id_seq" OWNED BY public.suggestion_player.sp_id;


--
-- Name: suggestions; Type: TABLE; Schema: public; Owner: wwuser
--

CREATE TABLE public.suggestions (
    sg_id integer NOT NULL,
    suggestion text NOT NULL,
    zeitpunkt date NOT NULL,
    fk_spieler integer,
    likes integer DEFAULT 0 NOT NULL,
    dislikes integer DEFAULT 0
);


ALTER TABLE public.suggestions OWNER TO wwuser;

--
-- Name: suggestions_sg_id_seq; Type: SEQUENCE; Schema: public; Owner: wwuser
--

CREATE SEQUENCE public.suggestions_sg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.suggestions_sg_id_seq OWNER TO wwuser;

--
-- Name: suggestions_sg_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wwuser
--

ALTER SEQUENCE public.suggestions_sg_id_seq OWNED BY public.suggestions.sg_id;


--
-- Name: zahlungen_tbl; Type: TABLE; Schema: public; Owner: wwuser
--

CREATE TABLE public.zahlungen_tbl (
    z_id integer NOT NULL,
    bezahlt boolean DEFAULT false,
    barzahlung boolean,
    fk_s_id integer,
    betrag numeric NOT NULL,
    grund character varying DEFAULT 'Fehlverhalten'::character varying,
    zeitpunkt timestamp without time zone,
    until date
);


ALTER TABLE public.zahlungen_tbl OWNER TO wwuser;

--
-- Name: zahlungen_tbl_z_id_seq; Type: SEQUENCE; Schema: public; Owner: wwuser
--

CREATE SEQUENCE public.zahlungen_tbl_z_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.zahlungen_tbl_z_id_seq OWNER TO wwuser;

--
-- Name: zahlungen_tbl_z_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wwuser
--

ALTER SEQUENCE public.zahlungen_tbl_z_id_seq OWNED BY public.zahlungen_tbl.z_id;


--
-- Name: ausgaben a_id; Type: DEFAULT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.ausgaben ALTER COLUMN a_id SET DEFAULT nextval('public.ausgaben_a_id_seq'::regclass);


--
-- Name: spieler_tbl s_id; Type: DEFAULT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.spieler_tbl ALTER COLUMN s_id SET DEFAULT nextval('public.spieler_tbl_s_id_seq'::regclass);


--
-- Name: suggestion_player sp_id; Type: DEFAULT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestion_player ALTER COLUMN sp_id SET DEFAULT nextval('public."suggestionPlayer_sp_id_seq"'::regclass);


--
-- Name: suggestions sg_id; Type: DEFAULT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestions ALTER COLUMN sg_id SET DEFAULT nextval('public.suggestions_sg_id_seq'::regclass);


--
-- Name: zahlungen_tbl z_id; Type: DEFAULT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.zahlungen_tbl ALTER COLUMN z_id SET DEFAULT nextval('public.zahlungen_tbl_z_id_seq'::regclass);


--
-- Data for Name: ausgaben; Type: TABLE DATA; Schema: public; Owner: wwuser
--

INSERT INTO public.ausgaben (a_id, amount, reason, zeitpunkt) VALUES (3, 49.49, 'Neues Pick', '2023-09-21');


--
-- Data for Name: spieler_tbl; Type: TABLE DATA; Schema: public; Owner: wwuser
--

INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (23, 'Ben', 'Wallner', '/PlayerImages/Wallner.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (22, 'Moritz', 'Steiner', '/PlayerImages/Steiner.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (20, 'Jakob', 'Ruprecht', '/PlayerImages/Ruprecht.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (18, 'Albert', 'Prantl', '/PlayerImages/Prantl.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (25, 'Nikolas ', 'Wiltschko', '/PlayerImages/Wiltschko.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (24, 'Nikolas', 'Wilk', '/PlayerImages/Wilk.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (19, 'Alex', 'Reinisch', '/PlayerImages/Reinisch.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (13, 'Flo', 'Domian', '/PlayerImages/Domian.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (17, 'Leo', 'Pantic', '/PlayerImages/Pantic.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (12, 'Max ', 'Correa', '/PlayerImages/Correa.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (29, 'Pipo', 'Pajer', '/PlayerImages/Pajer.jpeg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (30, 'Benni', 'Admin', '/PlayerImages/Halmer-Ben.jpeg', true, 'BenniPW', 'benni.halmer@gmail.com');
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (26, 'Lukas', 'Semler', '/PlayerImages/Semler2.jpg', false, NULL, '');
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (1, 'Lukas', 'Semler', '/PlayerImages/Semler2.jpg', true, 'LukasPW', 'lukas.semler@gmail.com');
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (11, 'Tobi', 'Bachmann', '/PlayerImages/Bachmann.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (14, 'Niko', 'Florea', '/PlayerImages/Florea-1.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (28, 'Dani', 'Schmid', '/PlayerImages/Schmid-Dani.jpeg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (16, 'Leo', 'Kutej', '/PlayerImages/Kutej.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (15, 'Benni', 'Halmer', '/PlayerImages/Halmer-B.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (21, 'Simon', 'Schmid', '/PlayerImages/Schmid-S.jpg', false, NULL, NULL);
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (27, 'Elias', 'Halmer', '/PlayerImages/Halmer-E.jpeg', false, NULL, '');
INSERT INTO public.spieler_tbl (s_id, vorname, nachname, profilbild_url, isadmin, passwort, email) VALUES (9, 'Fabi', 'Androsch', '/PlayerImages/Androsch2.jpg', false, NULL, NULL);


--
-- Data for Name: suggestion_player; Type: TABLE DATA; Schema: public; Owner: wwuser
--



--
-- Data for Name: suggestions; Type: TABLE DATA; Schema: public; Owner: wwuser
--

INSERT INTO public.suggestions (sg_id, suggestion, zeitpunkt, fk_spieler, likes, dislikes) VALUES (10, 'Pickerl', '2023-08-25', NULL, 2, 1);
INSERT INTO public.suggestions (sg_id, suggestion, zeitpunkt, fk_spieler, likes, dislikes) VALUES (13, 'Harz für die nächste Saison ', '2023-08-25', NULL, 5, 1);
INSERT INTO public.suggestions (sg_id, suggestion, zeitpunkt, fk_spieler, likes, dislikes) VALUES (11, 'Bier', '2023-08-25', NULL, 3, 1);
INSERT INTO public.suggestions (sg_id, suggestion, zeitpunkt, fk_spieler, likes, dislikes) VALUES (14, 'Mannschaftsabend (Paintball, Bar, Bowling)', '2023-09-01', NULL, 10, 0);


--
-- Data for Name: zahlungen_tbl; Type: TABLE DATA; Schema: public; Owner: wwuser
--

INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (70, true, true, 11, 0.5, 'Field Goal im Training', '2023-09-06 17:53:11.390907', '2023-10-06');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (50, true, true, 11, 0.5, 'Field Goal im Training', '2023-09-01 18:40:49.124177', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (45, true, true, 19, 1, 'Zu spät kommen beim Training', '2023-08-31 20:27:28.215513', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (43, true, true, 11, 1, 'Zu spät kommen beim Training', '2023-08-31 20:27:07.650162', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (32, true, true, 14, 1.5, 'Headshot Torwart (freier Wurf)', '2023-08-23 19:35:15.385275', '2023-09-23');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (31, true, true, 20, 1.5, 'Headshot Torwart (freier Wurf)', '2023-08-23 19:35:03.734936', '2023-09-23');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (55, true, true, 19, 2.5, 'Training ohne Grund Absagen', '2023-09-01 21:21:47.722884', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (49, true, true, 11, 7.5, 'Anderes', '2023-09-01 18:40:09.32884', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (34, true, true, 25, 2.50, 'Schlechte Musik', '2023-08-25 20:26:55.227576', '2023-09-25');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (37, true, true, 25, 0.50, 'Anderes', '2023-08-29 20:13:32.850012', '2023-09-29');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (104, false, NULL, 29, 1, 'Furzen im Training', '2023-09-28 17:51:12.43852', '2023-10-28');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (80, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-16 17:48:03.752346', '2023-10-16');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (79, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-16 17:47:57.842327', '2023-10-16');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (73, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-07 15:36:03.384898', '2023-10-07');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (77, true, true, 28, 15, 'Dumme rote Karte', '2023-09-09 19:42:45.081286', '2023-10-09');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (33, true, true, 17, 4, 'Zu spät kommen beim Match', '2023-08-25 06:09:17.318527', '2023-09-25');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (51, true, true, 20, 0.5, 'Field Goal im Training', '2023-09-01 18:41:05.059382', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (56, true, true, 23, 1.5, 'Headshot Torwart (freier Wurf)', '2023-09-04 15:09:12.756083', '2023-10-04');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (57, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-04 15:12:02.867024', '2023-10-04');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (42, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-08-31 20:26:30.24316', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (46, true, false, 21, 1, 'Zu spät kommen beim Training', '2023-08-31 20:27:51.868812', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (52, true, false, 21, 0.5, 'Field Goal im Training', '2023-09-01 18:41:29.576878', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (93, true, true, 20, 1, 'Dress vergessen', '2023-09-21 16:07:32.872474', '2023-10-21');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (116, false, NULL, 12, 1, 'Field Goal im Training', '2023-10-12 17:48:29.169753', '2023-11-12');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (38, true, false, 26, 1, 'Kleidung vergessen', '2023-08-30 10:03:13.270691', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (118, false, NULL, 25, 1, 'Kleidung vergessen', '2023-10-14 16:32:25.117101', '2023-11-14');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (75, true, false, 12, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-08 16:36:39.799084', '2023-10-08');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (120, false, NULL, 27, 2, 'Zu spät kommen beim Match', '2023-10-22 13:09:08.247288', '2023-11-22');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (72, true, false, 12, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-07 15:35:54.050172', '2023-10-07');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (54, true, false, 12, 2.5, 'Trainer beleidigen', '2023-09-01 21:08:11.34757', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (123, false, NULL, 25, 1.50, 'Anderes', '2023-10-23 16:03:04.260467', '2023-11-23');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (39, true, false, 12, 0.5, 'Field Goal im Training', '2023-08-30 15:49:03.754149', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (36, true, false, 12, 1, 'Kleidung vergessen', '2023-08-29 15:05:19.08731', '2023-09-29');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (35, true, false, 12, 3, 'Zu spät kommen beim Match', '2023-08-26 07:18:26.85186', '2023-09-26');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (44, true, true, 15, 1, 'Zu spät kommen beim Training', '2023-08-31 20:27:17.248168', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (53, true, true, 15, 0.5, 'Field Goal im Training', '2023-09-01 18:41:45.759231', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (41, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-08-30 16:38:07.439513', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (40, true, true, 25, 1.5, 'Headshot Torwart (freier Wurf)', '2023-08-30 16:38:01.575798', '2023-09-30');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (58, true, true, 17, 0.5, 'Field Goal im Training', '2023-09-04 16:35:26.74814', '2023-10-04');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (48, true, true, 17, 1, 'Dresscode Freitag', '2023-09-01 18:39:50.116112', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (47, true, false, 16, 1, 'Dresscode Freitag', '2023-09-01 18:39:36.855511', '2023-10-01');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (74, true, true, 11, 0.5, 'Spende', '2023-09-07 18:04:54.463426', '2023-10-07');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (59, true, true, 23, 0.5, 'Spende', '2023-09-04 16:54:41.270032', '2023-10-04');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (61, true, true, 25, 0.5, 'Spende', '2023-09-04 17:53:36.448391', '2023-10-04');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (103, true, true, 19, 0.5, 'Spende', '2023-09-28 16:46:58.552901', '2023-10-28');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (81, true, true, 25, 1, 'Dresscode vor einem Match', '2023-09-16 17:48:46.727464', '2023-10-16');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (76, true, true, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-08 16:36:58.89749', '2023-10-08');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (94, true, false, 12, 1, 'Keine Springschnur / Theraband / Ball', '2023-09-21 16:07:48.694718', '2023-10-21');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (115, false, NULL, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-10-09 15:38:49.569987', '2023-11-09');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (78, true, true, 17, 1, 'Dresscode Freitag', '2023-09-16 17:47:41.501936', '2023-10-16');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (117, false, NULL, 19, 1, 'Dresscode Freitag', '2023-10-13 16:43:57.370479', '2023-11-13');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (119, false, NULL, 25, 5, 'Zu spät kommen beim Match', '2023-10-21 14:31:53.513147', '2023-11-21');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (121, false, NULL, 17, 1, 'Keine Springschnur / Theraband / Ball', '2023-10-23 15:49:34.527708', '2023-11-23');
INSERT INTO public.zahlungen_tbl (z_id, bezahlt, barzahlung, fk_s_id, betrag, grund, zeitpunkt, until) VALUES (122, false, NULL, 25, 1, 'Keine Springschnur / Theraband / Ball', '2023-10-23 15:49:41.968361', '2023-11-23');


--
-- Name: ausgaben_a_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wwuser
--

SELECT pg_catalog.setval('public.ausgaben_a_id_seq', 3, true);


--
-- Name: spieler_tbl_s_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wwuser
--

SELECT pg_catalog.setval('public.spieler_tbl_s_id_seq', 31, true);


--
-- Name: suggestionPlayer_sp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wwuser
--

SELECT pg_catalog.setval('public."suggestionPlayer_sp_id_seq"', 4, true);


--
-- Name: suggestions_sg_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wwuser
--

SELECT pg_catalog.setval('public.suggestions_sg_id_seq', 15, true);


--
-- Name: zahlungen_tbl_z_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wwuser
--

SELECT pg_catalog.setval('public.zahlungen_tbl_z_id_seq', 123, true);


--
-- Name: ausgaben ausgaben_pk; Type: CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.ausgaben
    ADD CONSTRAINT ausgaben_pk PRIMARY KEY (a_id);


--
-- Name: spieler_tbl spieler_tbl_pkey; Type: CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.spieler_tbl
    ADD CONSTRAINT spieler_tbl_pkey PRIMARY KEY (s_id);


--
-- Name: suggestion_player suggestionplayer_pk; Type: CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestion_player
    ADD CONSTRAINT suggestionplayer_pk PRIMARY KEY (sp_id);


--
-- Name: suggestions suggestions_pk; Type: CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestions
    ADD CONSTRAINT suggestions_pk PRIMARY KEY (sg_id);


--
-- Name: suggestion_player unique_like_dislike; Type: CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestion_player
    ADD CONSTRAINT unique_like_dislike UNIQUE (fk_player, fk_suggestion);


--
-- Name: zahlungen_tbl zahlungen_tbl_pkey; Type: CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.zahlungen_tbl
    ADD CONSTRAINT zahlungen_tbl_pkey PRIMARY KEY (z_id);


--
-- Name: suggestions fk_player; Type: FK CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestions
    ADD CONSTRAINT fk_player FOREIGN KEY (fk_spieler) REFERENCES public.spieler_tbl(s_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: suggestion_player fk_player; Type: FK CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestion_player
    ADD CONSTRAINT fk_player FOREIGN KEY (fk_player) REFERENCES public.spieler_tbl(s_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: suggestion_player fk_suggestion; Type: FK CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.suggestion_player
    ADD CONSTRAINT fk_suggestion FOREIGN KEY (fk_suggestion) REFERENCES public.suggestions(sg_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: zahlungen_tbl zahlungen_tbl_fk_s_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wwuser
--

ALTER TABLE ONLY public.zahlungen_tbl
    ADD CONSTRAINT zahlungen_tbl_fk_s_id_fkey FOREIGN KEY (fk_s_id) REFERENCES public.spieler_tbl(s_id);


--
-- PostgreSQL database dump complete
--

