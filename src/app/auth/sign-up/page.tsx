'use client'
import {Formik} from 'formik';
import {UserType} from '@/types/user';
import {useRouter} from "next/navigation";
import axios from "axios";


const SignUp = () => {
    const router = useRouter();

    const initialValues: UserType = {
        username : '',
        email : '',
        password : '',
        passwordConfirm : '',
        role : 'MEMBER',
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    회원가입
                </h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, {setSubmitting,}) => {
                        console.log(values);
                        const response = await axios.post('/api/sign-up', values)
                        if(response.status === 200 || response.status === 201) {
                            setSubmitting(false);
                            router.push('/');
                        }
                    }}
                    validate={(values) => {
                        const errors: Partial<UserType> = {};
                        if (!values.email) {
                            errors.email = '이메일은 필수 항목입니다.';
                        }
                        if (!values.username) {
                            errors.username = '이름은 필수 항목입니다.';
                        }
                        if (!values.password) {
                            errors.password = '비밀번호는 필수 항목입니다.';
                        }
                        if(values.passwordConfirm !== values.passwordConfirm) {
                            errors.passwordConfirm = '위에 입력한 비밀번호와 다릅니다.'
                        }
                        if(!values.role) {
                            errors.role = "권한을 입력하세요."
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
                          handleSubmit ,
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    비밀번호 확인
                                </label>
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirm}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.passwordConfirm && touched.passwordConfirm && (
                                    <p className="text-red-500 text-sm">{errors.passwordConfirm}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.username && touched.username && (
                                    <p className="text-red-500 text-sm">{errors.username}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    권한
                                </label>
                                <input
                                    type="string"
                                    name="role"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.role}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                회원가입
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;
