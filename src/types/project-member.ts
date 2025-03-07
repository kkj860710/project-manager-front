export interface ProjectMember {
    id?: number,                // front id
    projectMemberId: string,    // db id
    projectId: string,          // project id
    userId: string,             // user
    role: string                // 역할 'ADMIN', 'MEMBER', 'READ_ONLY'
}