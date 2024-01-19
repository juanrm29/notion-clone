"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jution</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jution is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <Spinner size="lg"/>
      )}
      {!isAuthenticated && !isLoading && (
      <Button>
        Enter Jution
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
      )}
    </div>
  );
};
