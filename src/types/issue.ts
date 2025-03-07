export interface Issue {
    id?: number,                // front 사용 아이디
    issueId: string,            // db 저장 이슈 아이디
    projectId: string,          // 프로젝트 아이디
    title: string,              // 제목
    description?: string,       // 설명
    priority?: string,          // 우선도 'CRITICAL', 'HIGH', 'LOW', 'MEDIUM'
    status?: string,            // 상태 'DONE', 'IN_PROGRESS', 'TODO'
    assignedTo: string,         // 담당자
}