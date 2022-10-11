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
  - [Abhängigkeiten installieren](#abhängigkeiten-installieren)
  - [Projekt starten](#projekt-starten)
  - [Zugänge](#zugänge)
- [Deployment](#deployment)
  - [Images bauen](#images-bauen)
  - [Images in das Repository pushen](#images-in-das-repository-pushen)
  - [Anwendungen auf Server starten](#anwendungen-auf-server-starten)
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

Im Rahmen des Moduls ["Projekt I: Vision und Konzept"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_visionkonzept) im Wintersemester 2021/2022 wurde ein Design Sprint durchgeführt und auf dessen Grundlage ein Konzept entwickelt. Sowohl Design Sprint als auch Konzept wurden im [Wiki](https://github.com/Amythethird/Batta/wiki/Projekt-I-Vision-und-Konzept) dokumentiert und sind dort abrufbar. Das Modul ["Projekt I: Vision und Konzept"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_visionkonzept) wurde im März 2022 mit einer Abschlusspräsentation abgeschlossen.

## Projekt II: Entwicklung

Im Rahmen des Moduls ["Projekt II: Entwicklung"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_entwicklung/) im Sommersemester 2022 wurde ein MVP entwickelt. Die Dokumentation des MVPs sowie der Projektarbeit ist im [Wiki](https://github.com/Amythethird/Batta/wiki/Projekt-II-Entwicklung) abrufbar. Das Modul ["Projekt II: Entwicklung"](https://www.medieninformatik.th-koeln.de/study/master/moduls/ma_modul_projekt_entwicklung/) wird im September 2022 mit einer Abschlusspräsentation abgeschlossen.

# Setup-Guide

Folge den hier angegebenen Schritten, um das Projekt aufzusetzen.

## Voraussetzungen

Bitte installiere die folgenden Technologien und Tools, um die Entwicklung zu ermöglichen.

- [Node.js (Version 14 oder 16) und npm](https://nodejs.org/en/download/)
- [Docker Desktop](https://www.docker.com/get-started/)
- IDE/Editor (Empfehlung: [Visual Studio Code](https://code.visualstudio.com/))
- [Git](https://git-scm.com/) (und bei Bedarf ein Git Client der Wahl)
- Webbrowser

## Entwicklungsumgebung

Um deine Entwicklungsumgebung aufzusetzen, clone zunächst dieses GitHub-Repository und öffne den Projektordner in deinem Editor. Wenn du Visual Studio Code nutzt, empfiehlt es sich, die Extensions zu installieren, die dir über den Workspace vorgeschlagen werden.

Füge anschließend die benötigten Environment-Dateien (benannt mit ".env") in den entsprechenden Ordnern ein. Du findest den Inhalt der Dateien im Discord-Channel des Teams als angepinnte Nachricht. Frage bei Bedarf ein Team-Mitglied um Hilfe. Die folgenden Ordner benötigen eine passende .env Datei:

- /strapi

## Abhängigkeiten installieren

Installiere die Abhängigkeiten der Anwendungen, indem du folgende Befehle ausführst:

**Projektordner**

```bash
npm install
```

**Frontend**

```bash
cd frontend
npm install
```

**Strapi**

```bash
cd strapi
npm install
```

## Projekt starten

Führe zum lokalen Starten der Anwendungen den folgenden Befehl im Projektverzeichnis aus:

```bash
npm start
```

Anschließend ist das Frontend unter [http://localhost:3000](http://localhost:3000) und Strapi unter [http://localhost:2500](http://localhost:2500) erreichbar.

## Zugänge

Um einen einheitlichen Stand zu haben, wurden für die Entwicklung Dummy-Zugänge angelegt. Die Zugangsdaten für die gehostete Instanz des Projekts findest du im Discord-Channel des Teams als angepinnte Nachricht. Frage bei Bedarf ein Team-Mitglied um Hilfe. Um dich anzumelden, wenn du das Projekt bei dir gestartet hast, kannst du folgende Zugangsdaten nutzen:

**Strapi Admin-Panel**

- E-Mail: chef@strapi.io
- Passwort: Gourmet1234

# Deployment

Das Deployment erfolgt mit Docker über den Docker Hub, indem die Images der Anwendungen in folgende Repositories hochgeladen werden:

- Frontend: [https://hub.docker.com/repository/docker/mweiershaeuser/batta-frontend](https://hub.docker.com/repository/docker/mweiershaeuser/batta-frontend)
- Strapi: [https://hub.docker.com/repository/docker/mweiershaeuser/batta-strapi](https://hub.docker.com/repository/docker/mweiershaeuser/batta-strapi)

Die Images werden anschließend mit Docker Compose aus dem Docker Hub geladen und gestartet, sodass sie unter den folgenden Adressen erreichbar sind:

- Frontend: [https://batta.app](https://batta.app)
- Strapi: [https://strapi.batta.app/admin](https://strapi.batta.app/admin)

Für den Deployment-Prozess sind folgende Schritte durchzuführen:

## Images bauen

Führe jeweils die folgenden Befehle aus:

**Frontend**

```bash
cd frontend
docker build -t mweiershaeuser/batta-frontend .
```

**Strapi**

```bash
cd strapi
docker build -t mweiershaeuser/batta-strapi .
```

## Images in das Repository pushen

Für diesen Schritt benötigst du Berechtigungen für das Repository. Lege einen Account im Docker Hub an und wende dich an ein Team-Mitglied, damit dir die entsprechenden Berechtigungen erteilt werden. Anschließend meldest du dich mit deinem Docker Hub Account bei deiner lokalen Docker-Instanz (in der Regel über die Docker Desktop GUI) an und führst folgende Befehle aus:

**Frontend**

```bash
cd frontend
docker push mweiershaeuser/batta-frontend
```

**Strapi**

```bash
cd strapi
docker push mweiershaeuser/batta-strapi
```

## Anwendungen auf Server starten

Wurden die Images im Repository hochgeladen, kannst du die Anwendungen auf einem Server starten. Kopiere dazu die Datei [docker-compose.yaml](docker-compose.yaml) in das Arbeitsverzeichnis auf deinem Server (via FTP) und führe dort folgenden Befehl (via SSH) aus:

```bash
sudo docker-compose up -d
```

Anschließend sollten die Docker-Container starten und auf folgenden Ports erreichbar sein:

- Frontend: 8070
- Strapi: 8071

Der Server kann nun entsprechend der individuellen Gegebenheiten konfiguriert werden, um die auf den Ports laufenden Anwendungen in der Regel mit einem Web-Server über Domain und TLS-Verschlüsselung erreichbar zu machen.

# Partner:innen

- Jan Kus, Railslove GmbH
