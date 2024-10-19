-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userSettingId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userSettingId_fkey" FOREIGN KEY ("userSettingId") REFERENCES "Setting"("id") ON DELETE SET NULL ON UPDATE CASCADE;
