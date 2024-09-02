import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="h-screen overflow-hidden">
                <div className="min-h-screen flex items-center justify-center bg-gray-50 animate-fadeIn">
                    <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <h1 className="text-3xl font-semibold text-gray-700 ">
                                Login
                            </h1>
                        </div>

                        {/* Form with react-hook-form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-hovermain focus:ring-1 focus:ring-hovermain focus-visible:outline-none transition-colors ${
                                        errors.email ? "border-red-500" : ""
                                    }`}
                                    aria-label="Email Address"
                                    aria-required="true"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 6 characters long",
                                        },
                                    })}
                                    className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-hovermain focus:ring-1 focus:ring-hovermain focus-visible:outline-none transition-colors ${
                                        errors.password ? "border-red-500" : ""
                                    }`}
                                    aria-label="Password"
                                    aria-required="true"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-[#B48E61] text-white font-semibold rounded-md shadow-md hover:bg-hovermain-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hovermain"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                Don’t have an account?
                                <Link
                                    to="/Register"
                                    className="ml-1 text-hovermain hover:text-hovermain font-montserrat transition-colors"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;