'use client'
import React, {useState} from "react";
import Link from "next/link";
import {signOut} from "next-auth/react";

import {Session} from "next-auth";
import useProjectStore from "@/store/projects";
import useCommonStore, { useCommonStore } from "@/store/commons";

interface NavItemProps {
    mobile? : boolean;
    onSelectProject?: (projectId: string) => void;
    currentUser: Session | null;
}

// const NavItem = ({ mobile, onSelectProject, currentUser } : NavItemProps)=> {
const NavItem = ({ mobile, currentUser } : NavItemProps)=> {
    console.log("NavItem : ", currentUser);
    // 프로젝트 가져오기
    // 해당프로젝트를 nav클릭시 하단에 표시

    // const [projects, setProjects] = useState<{ id: string; name: string }[]>([]);
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    const {project, setProject, projects, setProjects} = useProjectStore();
    const {dropdownOpen, setDropdownOpen} = useCommonStore();

    // const fetchProjects = async () => {
    //     try {
    //         const res = await fetch("/api/projects"); // 백엔드 API 호출
    //         if (!res.ok) throw new Error("Failed to fetch projects");
    //         const data = await res.json();
    //         setProjects(data);
    //         setDropdownOpen(!dropdownOpen); // 버튼 클릭 시 드롭다운 열기/닫기
    //     } catch (error) {
    //         console.error("Error fetching projects:", error);
    //     }
    // };


    return (
        <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
            {/*<li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/admin">Admin</Link></li>*/}
            {/*<li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/user">User</Link></li>*/}
            {currentUser ? (
                <>
                    {/* 프로젝트 드롭다운 버튼 */}
                    <li className="relative">
                        <button
                            // onClick={fetchProjects}
                            // className="py-2 px-4 bg-blue-600 text-white rounded-md"
                        >
                            프로젝트
                        </button>

                        {/* 드롭다운 메뉴 */}
                        {/*기본 설정만 했음 수정요망 */}
                        {/*{dropdownOpen && (*/}
                        {/*    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">*/}
                        {/*        {projects.map((project) => (*/}
                        {/*            <li*/}
                        {/*                key={project.id}*/}
                        {/*                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"*/}
                        {/*                onClick={() => {*/}
                        {/*                    onSelectProject(project.id);*/}
                        {/*                    setDropdownOpen(false); // 선택 후 드롭다운 닫기*/}
                        {/*                }}*/}
                        {/*            >*/}
                        {/*                {project.name}*/}
                        {/*            </li>*/}
                        {/*        ))}*/}
                        {/*    </ul>*/}
                        {/*)}*/}
                    </li>

                    <li>
                        <Link href="/kanban">이슈보드</Link>
                    </li>

                    {/* 로그아웃 버튼 */}
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <button onClick={() => signOut()}>Sign Out</button>
                    </li>
                </>
            ) : (
                <>
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <Link href="/auth/sign-in">Sign In</Link>
                    </li>
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <Link href="/auth/sign-up">Sign Up</Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default NavItem;

