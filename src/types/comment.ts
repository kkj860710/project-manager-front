export interface comment {
    id?: number,            // front id
    commentId: string,      // db id
    issueId: string,        // issue id
    userId: string,         // user id
    content: string,        // 내용
}