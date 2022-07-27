# Batta

Willkommen bei Batta, einem Projekt im Kontext des Studienschwerpunkts Weaving the Web des Medieninformatik Masters an der Technischen Hochschule Köln.

Das Projekt baut auf dem [Veedelsretter](https://www.veedelsretter.koeln) auf und soll die Idee der Plattform unter der Thematik der Nachhaltigkeit neu aufgreifen. Weitere Informationen zur Ausgangssituation können dem [Wiki](https://github.com/Amythethird/Batta/wiki) sowie der [Webseite des Studienschwerpunkts](https://th-koeln.github.io/mi-master-wtw/projektthemen/2021-ws-project-1/index) entnommen werden.

**Überblick**

- [Team](#team)
- [Projektmodule](#projektmodule)
  - [Projekt I: Vision und Konzept](#projekt-i-vision-und-konzept)
  - [Projekt II: Entwicklung](#projekt-ii-entwicklung)
- [Setup-Guide](#setup-guide)
  - [Voraussetzungen](#voraussetzungen)
  - [Entwicklungsumgebung](#entwicklungsumgebung)
  - [Projekt starten](#projekt-starten)
    - [Starten mit Docker](#starten-mit-docker)
    - [Starten lokal](#starten-lokal)
  - [Zugänge](#zugänge)
  - [Partner:innen](#partnerinnen)

# Team

- [Denise-Adriana Büning](https://github.com/Amythethird)
- [Daniel Heuser](https://github.com/Darkkap)
- [Jan Koll](https://github.com/JanKoll)
- [Aljosha Cedric Merz](https://github.com/acvm007)
- [Melvin Weiershäuser](https://github.com/mweiershaeuser)

TH Köln<br />
Campus Gummersbach<br />
Fakultät für Informatik und Ingenieurwissenschaften<br />
Steinmüllerallee 1<br />
51643 Gummersbach

# Projektmodule

## Projekt I: Vision und Konzept

Im Rahmen des Moduls ["Projekt I: Vision und Konzept"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_visionkonzept) im Wintersemester 2021/2022 wurde ein Design Sprint durchgeführt und auf dessen Grundlage ein Konzept entwickelt. Sowohl Design Sprint als auch Konzept wurden im [Wiki](https://github.com/Amythethird/Batta/wiki/Projekt-I:-Vision-und-Konzept) dokumentiert und sind dort abrufbar. Das Modul ["Projekt I: Vision und Konzept"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_visionkonzept) wurde im März 2022 mit einer Abschlusspräsentation abgeschlossen.

## Projekt II: Entwicklung

Im Rahmen des Moduls ["Projekt II: Entwicklung"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_entwicklung/) im Sommersemester 2022 wurde ein MVP entwickelt. Die Dokumentation des MVPs sowie der Projektarbeit ist im [Wiki](https://github.com/Amythethird/Batta/wiki/Projekt-II:-Entwicklung) abrufbar. Das Modul ["Projekt II: Entwicklung"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_entwicklung/) wird im September 2022 mit einer Abschlusspräsentation abgeschlossen.

# Setup-Guide

Folge den hier angegebenen Schritten, um das Projekt aufzusetzen.

## Voraussetzungen

Bitte installiere die folgenden Technologien und Tools, um die Entwicklung zu ermöglichen.

- [Node.js (Version 14 oder 16) und npm](https://nodejs.org/en/download/)
- [Deno](https://deno.land/#installation)
- [Docker Desktop](https://www.docker.com/get-started/)
- IDE/Editor (Empfehlung: [Visual Studio Code]())
- [Git](https://git-scm.com/) (und bei Bedarf ein Git Client der Wahl)
- Webbrowser

## Entwicklungsumgebung

Um deine Entwicklungsumgebung aufzusetzen, clone zunächst dieses GitHub-Repository und öffne den Projektordner in deinem Editor. Wenn du Visual Studio Code nutzt, empfiehlt es sich die Extensions zu installieren, die dir über den Workspace vorgeschlagen werden.

Füge anschließend die benötigten Environment-Dateien (benannt mit ".env") in den entsprechenden Ordnern ein. Du findest den Inhalt der Dateien im Discord-Channel des Teams als angepinnte Nachricht. Frage bei Bedarf ein Team-Mitglied um Hilfe. Die folgenden Ordner benötigen eine passende .env Datei:

- /docker
- /docker/strapi/veedelsretter

## Projekt starten

### Starten mit Docker

Stelle sicher, dass Docker Desktop gestartet und deine Entwicklungsumgebung korrekt eingerichtet ist. Öffne anschließend das Terminal und navigiere in den docker-Ordner. Führe dort folgenden Befehl aus:

```bash
docker-compose -f dev.yml up -d
```

Nach dem erfolgreichen Start der Docker-Container sind diese wie folgt erreichbar:

- Frontend: [https://localhost](https://localhost)
- Backend: [https://strapi.localhost](https://strapi.localhost)

### Starten lokal

Führe zum lokalen Starten der Anwendungen jeweils die folgenden Befehle aus:

**Frontend**

```bash
cd frontend
npm install
npm start
```

Anschließend ist das Frontend unter [https://localhost:3000](https://localhost:3000) erreichbar.

**Strapi**

```bash
cd docker/strapi/veedelsretter
npm install
npm run develop
```

Anschließend ist Strapi unter [https://localhost:1337](https://localhost:1337) erreichbar.

## Zugänge

Um einen einheitlichen Stand zu haben, wurden für die Entwicklung Dummy-Zugänge angelegt. Mit diesen Zugangsdaten kannst du dich anmelden, wenn du das Projekt bei dir gestartet hast.

### Strapi Admin-Panel

E-Mail: chef@strapi.io

Passwort: Gourmet1234

# Partner:innen

- Jan Kus, Railslove GmbH
