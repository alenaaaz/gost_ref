export class AdditionalQuestions {
    static generateAdditionalQuestions(sourceType: string, manyAuthors: boolean, includePages: boolean): string {
        let additionalQuestionsHTML = '';

        if (sourceType === 'book') {
            additionalQuestionsHTML = `
                <h2>Введите данные для книги:</h2>
                <label for="bookTitle">Название книги:</label><br>
                <input type="text" id="bookTitle" required><br>
                <label for="bookAuthors">Фамилия, инициалы автора/авторов, через запятую:</label><br>
                <input type="text" id="bookAuthors" required><br>
                <label for="edition">Номер издания, если есть:</label><br>
                <input type="number" id="edition"><br>
                <label for="city">Город издательства: (М. СПб. – сокращенно с точкой, другие города пишутся полностью без точки)</label><br>
                <input type="text" id="city" required><br>
                <label for="publisher">Название издательства:</label><br>
                <input type="text" id="publisher" required><br>
                <label for="year">Год издания:</label><br>
                <input type="number" id="year" required><br>
            `;
            
            if (includePages) {
                additionalQuestionsHTML += `
                    <label for="totalPages">Количество страниц общее в книге:</label><br>
                    <input type="number" id="totalPages" required><br>
                `;
            }

            if (manyAuthors) {
                additionalQuestionsHTML += `
                    <label for="lastAuthor">Фамилия, инициалы автора, который упоминается последний в перечислении авторов (заполняется если есть и другие авторы, которые не указываются):</label><br>
                    <input type="text" id="lastAuthor"><br>
                    <label for="editors">Фамилия, инициалы автора/авторов, под редакцией которого/ых идет книга (в родительном падеже):</label><br>
                    <input type="text" id="editors"><br>
                `;
            }
        } else if (sourceType === 'internetResource') {
            additionalQuestionsHTML = `
                <h2>Введите данные для интернет-ресурса:</h2>
                <label for="resourceTitle">Заголовок статьи или другого документа:</label><br>
                <input type="text" id="resourceTitle"><br>
                <label for="siteName">Название сайта:</label><br>
                <input type="text" id="siteName" required><br>
                <label for="hyperlink">Гиперссылка на документ:</label><br>
                <input type="url" id="hyperlink" required><br>
                <label for="accessDate">Дата обращения на сайт:</label><br>
                <input type="date" id="accessDate" required><br>
            `;
        } else if (sourceType === 'journalArticle') {
            additionalQuestionsHTML = `
                <h2>Введите данные для статьи из журнала:</h2>
                <label for="journalArticleAuthors">Фамилия, инициалы автора/авторов, через запятую:</label><br>
                <input type="text" id="journalArticleAuthors" required><br>
                <label for="articleTitle">Название статьи:</label><br>
                <input type="text" id="articleTitle" required><br>
                <label for="journalName">Название журнала:</label><br>
                <input type="text" id="journalName" required><br>
                <label for="publicationYear">Год издания:</label><br>
                <input type="number" id="publicationYear" required><br>
                <label for="issueNumber">Номер журнала:</label><br>
                <input type="text" id="issueNumber" required><br>

            `;
            if (includePages) {
                additionalQuestionsHTML += `
                    <label for="pages">Страницы статьи в журнале:</label><br>
                    <input type="text" id="pages" required><br>
                `;
            }
        }
        
        return additionalQuestionsHTML;
    }
}