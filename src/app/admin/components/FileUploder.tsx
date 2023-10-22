import React from "react";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";

// const BASE_URL = "http://www.myserver.com";
const BASE_URL = "http://localhost:3000/";

export default function FileUploader() {
  const [extFiles, setExtFiles] = React.useState<ExtFile[]>([]);
  const [imageSrc, setImageSrc] = React.useState<File | string | undefined>(
    undefined
  );

  const updateFiles = (incommingFiles: ExtFile[]) => {
    console.log("incomming files", incommingFiles);
    setExtFiles(incommingFiles);
  };
  const onDelete = (id: FileMosaicProps["id"]) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource: File | string | undefined) => {
    setImageSrc(imageSource);
  };
  const handleStart = (filesToUpload: ExtFile[]) => {
    console.log("advanced demo start upload", filesToUpload);
  };
  const handleFinish = (uploadedFiles: ExtFile[]) => {
    console.log("advanced demo finish upload", uploadedFiles);
  };
  const handleAbort = (id: FileMosaicProps["id"]) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel = (id: FileMosaicProps["id"]) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      })
    );
  };
  return (
    <>
      <Dropzone
        onChange={updateFiles}
        minHeight="195px"
        value={extFiles}
        maxFiles={3}
        // FmaxFileSize={2998000 * 20}
        maxFileSize={1024 * 1024 * 5}
        label="Drag'n drop files here or click to browse"
        accept="application/pdf"
        uploadConfig={{
          autoUpload: true,
          url: BASE_URL + "/public/preview",
          cleanOnUpload: true,
        }}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
        fakeUpload
        actionButtons={{
          position: "after",
          abortButton: {},
          // cleanButton: {},
          // deleteButton: {},
          uploadButton: {},
        }}
      >
        {extFiles.map((file) => (
          <FileMosaic
            {...file}
            key={file.id}
            onDelete={onDelete}
            onSee={handleSee}
            onAbort={handleAbort}
            onCancel={handleCancel}
            resultOnTooltip
            alwaysActive
            preview
            info
          />
        ))}
      </Dropzone>
      <FullScreen
        open={imageSrc !== undefined}
        onClose={() => setImageSrc(undefined)}
      >
        <ImagePreview src={imageSrc} />
      </FullScreen>
    </>
  );
}
