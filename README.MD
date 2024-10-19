## How to start?

1. Install npm dependencies
```bash
npm install
```

2. Run postgres 
```bash
docker compose up
```

3. Run migrations
```bash
npx prisma migrate reset
```

4. Run script
```bash
npm start
```


Error
```txt

prisma:query BEGIN
prisma:query SELECT "public"."User"."id", "public"."User"."userSettingId" FROM "public"."User" WHERE ("public"."User"."id" = $1 AND 1=1) LIMIT $2 OFFSET $3
prisma:query SELECT "public"."Setting"."id" FROM "public"."Setting" WHERE ("public"."Setting"."accountId" = $1 AND "public"."Setting"."id" IN ($2)) OFFSET $3
prisma:query INSERT INTO "public"."Setting" DEFAULT VALUES RETURNING "public"."Setting"."id"
prisma:query UPDATE "public"."User" SET "userSettingId" = $1 WHERE ("public"."User"."id" IN ($2) AND "public"."Setting"."accountId" = $3)
prisma:query ROLLBACK

PrismaClientKnownRequestError: 
Invalid `prisma.user.update()` invocation in
/Users/user/Documents/Projects/test-project/src/main.ts:7:23

  4 async function bootstrap() {
  5     const prisma = new PrismaClient();
  6 
→ 7     await prisma.user.update(
The table `(not available)` does not exist in the current database.
    at Mn.handleRequestError (/Users/user/Documents/Projects/test-project/node_modules/@prisma/client/runtime/library.js:121:7753)
    at Mn.handleAndLogRequestError (/Users/user/Documents/Projects/test-project/node_modules/@prisma/client/runtime/library.js:121:7061)
    at Mn.request (/Users/user/Documents/Projects/test-project/node_modules/@prisma/client/runtime/library.js:121:6745)
    at async l (/Users/user/Documents/Projects/test-project/node_modules/@prisma/client/runtime/library.js:130:9633)
    at async bootstrap (/Users/user/Documents/Projects/test-project/src/main.ts:7:5) {
  code: 'P2021',
  clientVersion: '5.21.1',
  meta: { modelName: 'User', table: '(not available)' }
}

```


https://github.com/zfeed/prisma-bug-2024-10-19