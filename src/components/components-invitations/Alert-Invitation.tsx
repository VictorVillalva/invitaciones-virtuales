import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, X } from "lucide-react";

interface AlertProps{
    title: string;
    description: string;
    variant: "default" | "destructive";
    close: () => void;
}

export default function AlertInvitation({ title, description, variant = "default", close } : AlertProps) {
  return (
    <div className="fixed left-1/2 top-4 z-[100] w-full max-w-xl -translate-x-1/2 px-4">
      <Alert variant={variant}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>
          <div className="flex flex-row justify-between">
            <span>{title}</span>
            <button onClick={close}>
              <X className="h-4 w-4" />
            </button>
          </div>
        </AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
}
