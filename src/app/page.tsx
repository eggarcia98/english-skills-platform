"use client";

import React, { useState } from "react";
import HomeContent from "@/components/HomeContent";

export default function Home() {
    return (
        <main className="flex flex-grow bg-gray-50 px-4 sm:px-20 items-center">
            <div className="container mx-auto text-center w-auto">
                 <HomeContent />;
            </div>
        </main>
    );
}
