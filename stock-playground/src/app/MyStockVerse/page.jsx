// pages/profile.js
"use client";

import Loader from "@/components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {

    const [session, setsession] = useState(false);
    const [loder, setloder] = useState(false);
    const [userData, setUserData] = useState(true);

    useEffect(() => {
        if (session) {
            axios.get('/api/user')
                .then(response => setUserData(response.data))
                .catch(error => console.error('Error fetching user data:', error));
        }

    }, [session]);

    // if (loader) return <div>Loading...</div>;
    // if (!session) return <div>Please log in to view your profile</div>;

    return (
        <div className="mb-8 ">
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">Mr abc</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Total Cash</dt>
                        <dd className="text-gray-700 sm:col-span-2">₹ 500</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Total Coins </dt>
                        <dd className="text-gray-700 sm:col-span-2">100</dd>
                    </div>

                </dl>
            </div>
            {/* // purchased stocks  */}
            <h1 className=" mt-2 mb-2 text-center font-bold text-3xl">Positions </h1>
            <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                <div>
                    <p className="text-lg ">IBM</p>
                    {/* quantity  */}
                    <p className="text-sm text-gray-500">Profit</p>

                    <p className="text-2xl font-medium text-gray-900">₹ 240.94</p>
                </div>

                <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>

                    <span className="text-xs font-medium"> 67.81% </span>
                </div>
            </article>

            <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                <div>
                    <p className="text-lg ">IBM</p>
                    <p className="text-sm text-gray-500">Profit</p>

                    <p className="text-2xl font-medium text-gray-900">₹ 240.94</p>
                </div>

                <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                    </svg>

                    <span className="text-xs font-medium"> 67.81% </span>
                </div>
            </article>
        </div>
    );
}
