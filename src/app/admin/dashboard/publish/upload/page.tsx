"use client";

import { useState } from "react";
import { UploadButton } from "../../../../../lib/UploadThing";
import axios from "axios";
import { notFound, useRouter } from "next/navigation";
import { AlertError } from "@/app/admin/components/Alert";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return notFound();
  }

  const handlePreviewUpload = async (url: String) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/paper/upload/preview", {
        id: parseInt(id),
        previewUrl: url,
      });

      // console.log(response.data);
    } catch (error: any) {
      // console.log("Signup failed", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleFullPdfUpload = async (url: String) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/paper/upload/full", {
        id: parseInt(id),
        downloadUrl: url,
      });

      // console.log(response.data);
    } catch (error: any) {
      // console.log("Signup failed", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-36 text-center">
      <p className="text-primary font-semibold text-xs">Upload Preview PDF</p>
      <UploadButton
        endpoint="pdfUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          console.log("Files: ", res[0].fileUrl);
          handlePreviewUpload(res[0].fileUrl);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert("Please try again");
        }}
      />
      <p className="text-primary font-semibold text-xs mt-10">
        Upload Full PDF
      </p>
      <UploadButton
        endpoint="pdfUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          console.log("Files: ", res[0].fileUrl);
          handleFullPdfUpload(res[0].fileUrl);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert("Please try again");
        }}
      />
    </main>
  );
}
