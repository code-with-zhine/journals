BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fullName] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phoneNumber] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [isVerified] BIT CONSTRAINT [User_isVerified_df] DEFAULT 0,
    [isAdmin] BIT CONSTRAINT [User_isAdmin_df] DEFAULT 0,
    [forgotPasswordToken] NVARCHAR(1000),
    [forgotPasswordTokenExpiry] DATETIME2,
    [verifyToken] NVARCHAR(1000),
    [verifyTokenExpiry] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [User_phoneNumber_key] UNIQUE NONCLUSTERED ([phoneNumber])
);

-- CreateTable
CREATE TABLE [dbo].[Paper] (
    [id] INT NOT NULL IDENTITY(1,1),
    [paperCategory] NVARCHAR(1000) NOT NULL,
    [paperTitle] NVARCHAR(1000) NOT NULL,
    [paperISSN] NVARCHAR(1000) NOT NULL,
    [paperVolume] NVARCHAR(1000) NOT NULL,
    [keywords] NVARCHAR(1000) NOT NULL,
    [previewUrl] NVARCHAR(1000) NOT NULL,
    [downloadUrl] NVARCHAR(1000) NOT NULL,
    [receivedDate] DATETIME2 NOT NULL,
    [approvedDate] DATETIME2 NOT NULL,
    [publishdDate] DATETIME2 NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Paper_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [ownerEmail] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Paper_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Author] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fullName] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [department] NVARCHAR(1000) NOT NULL,
    [organisation] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Author_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[_AuthorToPaper] (
    [A] INT NOT NULL,
    [B] INT NOT NULL,
    CONSTRAINT [_AuthorToPaper_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_AuthorToPaper_B_index] ON [dbo].[_AuthorToPaper]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[_AuthorToPaper] ADD CONSTRAINT [_AuthorToPaper_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Author]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_AuthorToPaper] ADD CONSTRAINT [_AuthorToPaper_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Paper]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
