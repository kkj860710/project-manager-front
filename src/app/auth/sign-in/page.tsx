'use client'
import {Formik} from "formik";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

// import { useSession } from "next-auth/react";

interface LoginValue {
    email: string;
    password: string;
}

const LogIn = () => {

    const router = useRouter();

    const initialValues: LoginValue = {
        email: '',
        password: '',
    };


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    로그인
                </h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, { setSubmitting }) => {
                        // try {
                        //     // ✅ API 라우트를 경유하여 로그인 처리
                        //     const response = await fetch("/api/sign-in", {
                        //         method: "POST",
                        //         headers: {
                        //             "Content-Type": "application/json",
                        //         },
                        //         body: JSON.stringify({
                        //             email: values.email,
                        //             password: values.password,
                        //         }),
                        //     });
                        //     console.log(response);
                        //     const result = await response.json();
                        //
                        //     if (response.ok) {
                        //         console.log("Login successful");
                        //         router.replace("/"); // 로그인 성공 후 리다이렉트
                        //     } else {
                        //         console.error("Login failed", result.error);
                        //     }
                        try {
                            const res = await signIn("credentials", {
                                email: values.email,
                                password: values.password,
                                redirect: false,  // ✅ 자동 리다이렉트 방지
                            });

                            if (res?.ok) {
                                console.log("Login successful");
                                router.push("/");
                                router.refresh();
                            } else {
                                console.error("Login failed");
                            }
                        } catch (error) {
                            console.error("Error during sign in", error);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                    validate={(values) => {
                        const errors: Partial<LoginValue> = {};
                        if (!values.email) {
                            errors.email = '이메일은 필수 항목입니다.';
                        }
                        if (!values.password) {
                            errors.password = '비밀번호는 필수 항목입니다.';
                        }
                        return errors;
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.password && touched.password && (
                                    <p className="text-red-500 text-sm">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                로그인
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LogIn;
