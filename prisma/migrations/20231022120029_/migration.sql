/*
  Warnings:

  - Added the required column `abstract` to the `Paper` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Paper] ADD [abstract] NVARCHAR(1000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
  ROLLBACK TRAN;
END;
THROW

END CATCH
