# NeonDB (PostgreSQL) and Prisma ORM

Here's a complete step-by-step guide to set up PostgreSQL using NeonDB in a Next.js project — from creating the database to retrieving the connection string.

##

### ✅ 1. Create an Account on Neon :

- Go to https://neon.tech

- Click "Start for Free" or "Sign Up".

- Sign up using :

    - GitHub
    - Google
    - Or with email/password

##

### ✅ 2. Create a New Project (PostgreSQL Database) :

Once logged in:

1. Click “New Project”.

2. Set :

    - Project Name: e.g., nextjs-app-db.

    - Region: Pick one close to your users 

3. Click “Create Project”.

Wait ~10 seconds while Neon provisions your database.

##

### ✅ 3. Get Your PostgreSQL Connection String :

After your project is created :

- You’ll land on the Dashboard > Connection Details

- Copy the connection string (password included)
It looks like :

```bash
postgres://username:password@ep-silent-moon-123456.us-east-2.aws.neon.tech/dbname?sslmode=require
```

This string will be used in your `.env` file.

##

### ✅ 4. Add the Connection String to Your Next.js Project :

Create or update your `.env` file :

```bash
DATABASE_URL="postgres://username:password@ep-xxxxx.us-east-2.aws.neon.tech/dbname?sslmode=require"
```

##