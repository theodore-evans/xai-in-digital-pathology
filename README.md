# XAI Survey

Create `.env` file with the following settings:

```bash
PUBLIC_URL=https://empaia-dev.charite.de/xai-usability-survey
COMPOSE_APP_HOST=127.0.0.1
COMPOSE_APP_PORT=3000
COMPOSE_DB_HOST=127.0.0.1
COMPOSE_DB_PORT=27017
COMPOSE_DB_VOL=./data
COMPOSE_NETWORK=default
```

Run containers:

```
docker-compose up -d
```
