'use client'
import {Formik} from 'formik';
import {useRouter} from "next/navigation";
import axios from "axios";
import {initialProjectState, ProjectState} from "@/types/project";
import {useEffect} from "react";
import useUserStore from "@/store/users";
import useProjectStore from "@/store/projects";


const ProjectPage = () => {
    const router = useRouter();

    const initialValues: ProjectState = initialProjectState;
    const {userList, setUserList}= useUserStore()

    const fetchUserList = async () => {
        try {
            const response = await axios.get('/api/user/list');
            setUserList(response.data); // 받아온 user list를 상태로 저장
        } catch (error) {
            console.error('사용자 목록을 불러오는 데 실패했습니다:', error);
        }
    };

    useEffect(() => {
        fetchUserList();
        setUserList([]);
    }, []);



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    프로젝트 생성
                </h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, {setSubmitting,}) => {
                        const response = await axios.post('/api/sign-up', values)
                        if(response.status === 200 || response.status === 201) {
                            setSubmitting(false);
                            router.push('/');
                        }
                    }}
                    validate={(values) => {
                        const errors: Partial<ProjectState> = {};
                        if (!values.name) {
                            errors.name = '프로젝트 명은 필수입력 항목입니다.';
                        }
                        if (!values.description) {
                            errors.description = '설명은 필수입력 항목입니다. 항목입니다.';
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
                                    프로젝트 명
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.name && touched.name && (
                                    <p className="text-red-500 text-sm">{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    설명
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.description && touched.description && (
                                    <p className="text-red-500 text-sm">{errors.description}</p>
                                )}
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

export default ProjectPage;
