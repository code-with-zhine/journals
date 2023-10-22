BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Paper] ALTER COLUMN [previewUrl] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Paper] ALTER COLUMN [downloadUrl] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Paper] ALTER COLUMN [publishdDate] NVARCHAR(1000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
