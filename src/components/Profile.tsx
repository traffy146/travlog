"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from next/image

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
            <Image
              src={user.photoURL}
              alt="Profile"
              width={96} // Set appropriate width
              height={96} // Set appropriate height
              className="rounded-full"
            />
          )}
          <Image
            src="/images/profile/1.png"
            alt="Profile"
            width={250}
            height={250}
          />
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Display Name:</strong>{" "}
            {user.displayName || "Juan Dela Cruz"}
          </p>
        </div>
      </div>
    </div>
  );
}
