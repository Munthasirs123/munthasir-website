/* eslint-disable @next/next/no-img-element */
"use client";

import { User } from "lucide-react";
import { useState } from "react";

export function UserAvatar({ className = "w-24 h-24" }: { className?: string }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={`relative shrink-0 ${className}`}>
            <div className="w-full h-full rounded-full border-2 border-blackish overflow-hidden bg-mustard">
                {!imageError ? (
                    <img
                        src="/avatar-placeholder.png"
                        alt="Munthasir Shiraz"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-mustard text-blackish">
                        <User className="h-1/2 w-1/2" />
                    </div>
                )}
            </div>
        </div>
    );
}
