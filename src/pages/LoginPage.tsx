import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { verifyToken } from "../utils/verifyToken";
import { setUser } from "../redux/features/auth/authSlice";

const LoginPage = () => {
	const [loginData, setLoginData] = useState({});
	const navigate = useNavigate();

	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const toastId = toast.loading("Logging in");

		try {
			const res = await login(loginData);
			const user = verifyToken(res.data.data);

			dispatch(setUser({ user: user, token: res.data.data }));
			localStorage.setItem("token", res.data.data);

			toast.success("Logged in", { id: toastId, duration: 2000 });
			navigate("/");
		} catch (err) {
			toast.error("Something went wrong!", {
				id: toastId,
				duration: 2000,
			});
		}
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<Toaster />
			<label htmlFor="email" className="block text-base font-medium">
				Email
			</label>
			<input
				type="email"
				id="email"
				name="email"
				className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
				placeholder="Enter Email"
				required
				onBlur={(e) => {
					setLoginData({
						...loginData,
						[e.target.name]: e.target.value,
					});
				}}
			/>

			<label htmlFor="password" className="block text-base font-medium">
				Password
			</label>
			<input
				type="password"
				id="password"
				name="password"
				className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
				placeholder="Enter Password"
				required
				onBlur={(e) => {
					setLoginData({
						...loginData,
						[e.target.name]: e.target.value,
					});
				}}
			/>

			<button className="text-white text-center px-10 py-3 my-5 rounded font-bold bg-gradient-to-r from-indigo-500 to-indigo-800">
				Login
			</button>
		</form>
	);
};

export default LoginPage;
