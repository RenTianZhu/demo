class DataComment {
    username: string = "";
    content: string = "";
    depth: number = 1;

    constructor(username, content) {
        this.username = username
        this.content = content
    }
}

export default DataComment