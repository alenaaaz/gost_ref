export class DataInputPage {
    private sourceType: string;
    private manyAuthors: boolean;
    private includePages: boolean;

    constructor(sourceType: string, manyAuthors: boolean, includePages: boolean) {
        this.sourceType = sourceType;
        this.manyAuthors = manyAuthors;
        this.includePages = includePages;
    }
        

    getInputFields(): any {
        const authors = (document.getElementById(`${this.sourceType}Authors`) as HTMLInputElement)?.value.trim().split(',');
        const title = (document.getElementById(`${this.sourceType}Title`) as HTMLInputElement)?.value.trim();
        const edition = (document.getElementById('edition') as HTMLInputElement)?.value.trim();
        const year = parseInt((document.getElementById('year') as HTMLInputElement)?.value.trim());
        const city = (document.getElementById('city') as HTMLInputElement)?.value.trim();
        const publisher = (document.getElementById('publisher') as HTMLInputElement)?.value.trim();
        const totalPages = parseInt((document.getElementById('totalPages') as HTMLInputElement)?.value.trim());
        const lastAuthor = (document.getElementById('lastAuthor') as HTMLInputElement)?.value.trim();
        const editors = (document.getElementById('editors') as HTMLInputElement)?.value.trim();
        const articleTitle = (document.getElementById('articleTitle') as HTMLInputElement)?.value.trim();
        const journalName = (document.getElementById('journalName') as HTMLInputElement)?.value.trim();
        const publicationYear = parseInt((document.getElementById('publicationYear') as HTMLInputElement)?.value.trim());
        const issueNumber = (document.getElementById('issueNumber') as HTMLInputElement)?.value.trim();
        const pages = (document.getElementById('pages') as HTMLInputElement)?.value.trim();
        const resourceTitle = (document.getElementById('resourceTitle') as HTMLInputElement)?.value.trim();
        const siteName = (document.getElementById('siteName') as HTMLInputElement)?.value.trim();
        const hyperlink = (document.getElementById('hyperlink') as HTMLInputElement)?.value.trim();
        const accessDate = (document.getElementById('accessDate') as HTMLInputElement)?.value.trim();

        return {
            authors,
            title,
            edition,
            year,
            city,
            publisher,
            totalPages,
            lastAuthor,
            editors,
            articleTitle,
            journalName,
            publicationYear,
            issueNumber,
            pages,
            resourceTitle,
            siteName,
            hyperlink,
            accessDate
        };
    }
}
