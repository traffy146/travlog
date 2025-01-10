"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!user) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="space-y-4">
          {user.photoURL && (
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="w-24 h-24 rounded-full"
            />
          )}
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Display Name:</strong> {user.displayName || "Not set"}</p>
        </div>
      </div>
    </div>
  );
}