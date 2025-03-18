# Cush

## Developer Setup

### Pre-requisites

You will need to install serverless locally.

```bash
npm install -g serverless@3
npm install -g knex
```

### Project Initialisation

```bash
cp .env.example .env
docker compose up -d
npm install && npm run dev-install
```

### Day to day

```bash
docker compose up -d
npm run dev
```

### Database Setup

#### Running migrations

```bash
cd resources/db
npm install knex
npx knex migrate:latest
```

#### Seeding the database

```bash
cd resources/db
npx knex seed:run
```

## URLs

| Resource  |  URL | Notes
|---|---|---
| API  |  <http://localhost:4000> | To serve API for all routes
| Queues | <http://localhost:9325> | To be able to view queue activity
| Buckets | <http://localhost:9001>  | View buckets u & p: minioadmin
| Local Email | <http://localhost:8005>  | Shows you emails in raw & HTML format
