-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('SYMPTOM', 'TRIGGER', 'INTERVENTION');

-- CreateTable
CREATE TABLE "Activity" (
    "id" VARCHAR(32) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" VARCHAR(32) NOT NULL,
    "activityId" TEXT NOT NULL,
    "type" "CategoryType" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Label" (
    "id" VARCHAR(32) NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToLabel" (
    "A" VARCHAR(32) NOT NULL,
    "B" VARCHAR(32) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToLabel_AB_unique" ON "_CategoryToLabel"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToLabel_B_index" ON "_CategoryToLabel"("B");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToLabel" ADD CONSTRAINT "_CategoryToLabel_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToLabel" ADD CONSTRAINT "_CategoryToLabel_B_fkey" FOREIGN KEY ("B") REFERENCES "Label"("id") ON DELETE CASCADE ON UPDATE CASCADE;
