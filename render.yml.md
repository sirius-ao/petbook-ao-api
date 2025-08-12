services:
  - type: web
    name: petbook-ao-api
    runtime: node
    repo: https://github.com/Petbook-ao/petbook-ao-api
    branch: master
    plan: free
    region: oregon
    buildCommand: |
      npm ci
      npx prisma generate
      npx prisma migrate deploy
      npm run build
    startCommand: npm run start:prod
    autoDeployTrigger:
      branch: master
    envVariables:
      NODE_ENV: production
      PORT: 3000
      DATABASE_URL: $SUPABASE_DB_URL  # Usando variável do Supabase
      JWT_SECRET: $JWT_SECRET
      #SUPABASE_URL: $SUPABASE_URL     # URL do projeto Supabase
      #SUPABASE_KEY: $SUPABASE_KEY     # Chave secreta do Supabase
    healthCheckPath: /api/health
    httpPort: 3000

version: "1"