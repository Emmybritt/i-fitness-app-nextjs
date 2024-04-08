/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@app/app/(modules)/(authentication)/infrastructure/hooks/useAuth";
import { User } from "@app/app/(modules)/core/domain/user";
import { redirect, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useUser = () => useContext(AuthContext);

export const UserProvider = (props: any) => {
	const router = useRouter();
	const { getUserData } = useAuth();

	return <AuthContext.Provider value={{}} {...props} />;
};

export default AuthContext;
