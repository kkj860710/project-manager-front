'use client';
import React from 'react';
// import { Helmet } from 'react-helmet-async';
import BarChart from '@/components/charts/BarChart';
// import BarChart2 from '@/components/charts/BarChart2';
// import PieChart from '@/components/charts/PieChart';
// import DoughnutChart from '@/components/charts/DoughnutChart';

// 목업 데이터 (더미 데이터)
const mockData = {
    totalUsers: 1500,
    activeProjects: 42,
    completedTasks: 870,
    pendingIssues: 34,
};

const Dashboard = () => {
    return (
        <div className="p-6">
            {/* 메타 정보 */}

            {/*<title>대시보드</title>*/}


            {/* 상단 요약 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">총 사용자</h3>
                    <p className="text-2xl">{mockData.totalUsers}명</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">진행 중인 프로젝트</h3>
                    <p className="text-2xl">{mockData.activeProjects}개</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">완료된 작업</h3>
                    <p className="text-2xl">{mockData.completedTasks}건</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">미해결 이슈</h3>
                    <p className="text-2xl">{mockData.pendingIssues}건</p>
                </div>
            </div>

            {/* 차트 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">월별 사용자 증가</h2>
                    <BarChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">프로젝트 완료율</h2>
                    {/*<BarChart2 />*/}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">사용자 비율</h2>
                    {/*<PieChart />*/}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">업무 진행 현황</h2>
                    {/*<DoughnutChart />*/}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
