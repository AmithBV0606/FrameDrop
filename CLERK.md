# Clerk Authentication

Here's a complete step-by-step guide to set up Clerk in a Next.js project, starting from logging in to retrieving API keys and integrating authentication.

##

### ✅ 1. Sign in to Clerk :

- Visit https://clerk.com/

- Click "Sign In" or "Get Started".

- You can sign in using:

    - GitHub
    - Google
    - Email/password

##

### ✅ 2. Create a new Clerk application :

- After logging in, click on “Create Application”.

- Enter your app’s name (e.g : FrameDrop).

- Click “Create”.

##

### ✅ 3. Retrieve Clerk API Keys

Once your app is created, you’ll be redirected to the Dashboard.

Go to API Keys tab in the sidebar:

- You’ll need:

    - CLERK_PUBLISHABLE_KEY
    - CLERK_SECRET_KEY (use only on the server side)

##

### ✅ 4. Install Clerk packages in your Next.js app : 

In your terminal:

```bash
npm install @clerk/nextjs
# or
yarn add @clerk/nextjs
```

##

### ✅ 5. Add Clerk environment variables :

In your .env.local file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Additional elements to add in `.env` :

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```