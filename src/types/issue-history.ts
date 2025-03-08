export interface IssueHistoryType {
    id?: number,                // front id
    issueHistoryId: string,     // db 저장아이디
    issueId: string,            // issue id
    newValue?: string,          // 새로운값
    oldValue?: string,          // 이전값
    changeType: string          // 바뀐 타입 'ASSIGNEE_CHANGE', 'COMMENT_ADDED', 'CREATE', 'PRIORITY_CHANGE', 'STATUS_CHANGE'
}