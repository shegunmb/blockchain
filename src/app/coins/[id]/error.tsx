"use client";

import DefaultErrorPage from "@/components/pages/errorPage";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <>
      <DefaultErrorPage />
      <div className="toast toast-center">
        <div className="alert alert-error">
          <span>{error.message}</span>
        </div>
      </div>
    </>
  );
}
