import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as axios } from "../_libs/axios+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthContext-D3DM7c_S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var api = axios.create({
	baseURL: "http://localhost:3333/api/v1",
	headers: { "Content-Type": "application/json" }
});
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("@aquaminerals:token");
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [isLoading] = (0, import_react.useState)(false);
	const login = async (email, password) => {
		const { accessToken, user: userData } = (await api.post("/auth/login", {
			email,
			password
		})).data;
		localStorage.setItem("@aquaminerals:token", accessToken);
		localStorage.setItem("@aquaminerals:user", JSON.stringify(userData));
		setUser(userData);
	};
	const register = async (name, email, password) => {
		const response = await api.post("/auth/register", {
			name,
			email,
			password
		});
		if (response.data.accessToken) {
			const { accessToken, user: userData } = response.data;
			localStorage.setItem("@aquaminerals:token", accessToken);
			localStorage.setItem("@aquaminerals:user", JSON.stringify(userData));
			setUser(userData);
		} else await login(email, password);
	};
	const logout = () => {
		localStorage.removeItem("@aquaminerals:token");
		localStorage.removeItem("@aquaminerals:user");
		setUser(null);
	};
	const updateUser = (userData) => {
		setUser(userData);
		localStorage.setItem("@aquaminerals:user", JSON.stringify(userData));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			isAuthenticated: !!user,
			isLoading,
			login,
			register,
			logout,
			updateUser
		},
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (context === void 0) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
//#endregion
export { api as n, useAuth as r, AuthProvider as t };
