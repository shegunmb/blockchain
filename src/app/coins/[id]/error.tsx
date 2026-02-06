"use client";

import { ErrorPage as DefaultErrorPage } from "@/components";

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
