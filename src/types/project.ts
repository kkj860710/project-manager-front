export interface ProjectType {
    id?: number,            // front id
    projectId: string,      // db id
    name: string,           // 프로젝트 명
    description: string,    // 설명
    ownerId: string,        // 프로젝트 책임자
}