export class DataProcessor {
    static generateBookReference(authors: string[], title: string, edition: string, year: number, city: string, publisher: string, totalPages: number, manyAuthors: boolean, lastAuthor?: string, editors?: string): string {
        const addDash = (document.querySelector('input[name="addDash"]:checked') as HTMLInputElement)?.value === 'addDash';
        const includePages = (document.querySelector('input[name="pagesNeeded"]:checked') as HTMLInputElement)?.value === 'includePages';
    

        let gostReference = '';

        if (manyAuthors) {
            const lastAuthor = (document.getElementById('lastAuthor') as HTMLInputElement)?.value.trim();
            const editors = (document.getElementById('editors') as HTMLInputElement)?.value.trim();
    
            gostReference = `${title} / ${authors.join(', ')}`;
            if (lastAuthor) {
                gostReference += `, ${lastAuthor} и др.`;
                if (editors) {
                    gostReference += `; под ред. ${editors}`;
                }
            } else if (editors) {
                gostReference += `, Под ред. ${editors}`;
            }
            gostReference += `. `;
        } else {
            gostReference = `${authors.join(', ')} ${title}.`;
        }
    
        if (edition) {
            gostReference += ` ${addDash ? '- ' : ''}${edition}-е изд.`;
        }
        if (city && publisher) {
            gostReference += ` ${addDash ? '-' : ''} ${city}: ${publisher}`;
        }
        if (year) {
            gostReference += `, ${year}.`;
        }
        if (includePages && totalPages) {
            gostReference += ` ${addDash ? '-' : ''} ${totalPages} с.`;
        }
    
        return gostReference;
    }

    static generateJournalArticleReference(authors: string, articleTitle: string, journalName: string, publicationYear: number, issueNumber: string, pages: string): string {
        const includePages = (document.querySelector('input[name="pagesNeeded"]:checked') as HTMLInputElement)?.value === 'includePages';
        const addDash = (document.querySelector('input[name="addDash"]:checked') as HTMLInputElement)?.value === 'addDash';
    
        let reference = '';
    
        if (addDash) {
            reference += `${authors} ${articleTitle} // ${journalName}. - ${publicationYear}. - №${issueNumber}.`;
        } else {
            reference += `${authors} ${articleTitle} // ${journalName}. ${publicationYear}. №${issueNumber}.`;
        }
    
        if (includePages) {
            if (addDash) {
                reference += ` - С. ${pages}.`;
            } else {
                reference += ` С. ${pages}.`;
            }
        }
    
        return reference;
    }

    static generateInternetResourceReference(
        resourceTitle: string, siteName: string, hyperlink: string, accessDate: string
    ): string {
        const accessDateInput = (document.getElementById('accessDate') as HTMLInputElement)?.value;
        const accessDateParts = accessDateInput ? accessDateInput.split('-') : [];
        const formattedAccessDate = accessDateParts.length === 3 ? `${accessDateParts[2]}.${accessDateParts[1]}.${accessDateParts[0]}` : '';
        let reference = '';
        if (resourceTitle) {
            reference += `${resourceTitle} // `;
        }
        if (accessDateInput) {
            reference += `${siteName} URL: ${hyperlink} (дата обращения: ${formattedAccessDate}).`;
        } else {
            reference += `${siteName} URL: ${hyperlink} (дата обращения: не указана).`;
        }
    
        return reference;
    }
}