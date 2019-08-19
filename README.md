# Cratedb with cube.js

> just for test

## Create tables

* DDL

```code
CREATE TABLE IF NOT EXISTS "doc"."users" (
   "id" INTEGER,
   "username" TEXT
);

CREATE TABLE IF NOT EXISTS "doc"."userapps" (
   "id" INTEGER,
   "appname" TEXT,
   "appversion" TEXT,
   "flags" BOOLEAN
)
```

* Insert demo datas

```code
INSERT INTO  userapps(id,appname,appversion,flags)
VALUES
(4,'login','1.0',TRUE),
(5,'logo','1.0',TRUE),
(6,'market','1.0',TRUE);

INSERT INTO users(id,username)
VALUES
(4,'app'),
(5,'dalong'),
(6,'rong');
```

## Running

* Start cratedb server

```code
docker-compose up -d
```

* Install deps

```code
yarn
```

* Apply patch

```code
patch < cratedb-driver-patch.patch 

can't find file to patch at input line 3
Perhaps you should have used the -p or --strip option?
The text leading up to this was:
--------------------------
|--- node_modules/@cubejs-backend/postgres-driver/driver/PostgresDriver-origin.js       2019-08-19 13:03:59.000000000 +0800
|+++ node_modules/@cubejs-backend/postgres-driver/driver/PostgresDriver.js      2019-08-19 13:04:05.000000000 +0800
--------------------------
File to patch: node_modules/@cubejs-backend/postgres-driver/driver/PostgresDriver.js
patching file node_modules/@cubejs-backend/postgres-driver/driver/PostgresDriver.js
```

* Start dev server

```code
yarn dev
```