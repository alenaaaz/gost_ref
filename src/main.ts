import { DataProcessor } from './dataProcessor'
import { BibliographicReference } from './bibliographicReference'
import { DataInputPage } from './dataInputPage'
import { AdditionalQuestions } from './additionalQuestions'

function handleSubmit(event: Event) {
    event.preventDefault();

    const sourceType = (document.querySelector('input[name="sourceType"]:checked') as HTMLInputElement)?.value;
    const manyAuthors = (document.querySelector('input[name="authorsCount"]:checked') as HTMLInputElement)?.value === 'manyAuthors';
    const includePages = (document.querySelector('input[name="pagesNeeded"]:checked') as HTMLInputElement)?.value === 'includePages';

    const inputData = new DataInputPage(sourceType, manyAuthors, includePages);
    const fieldsData = inputData.getInputFields();

    let gostReference = '';
    
    switch (sourceType) {
        case 'book':
            // Проверяем, что поле authors определено и не пустое
            if (fieldsData.authors && fieldsData.authors.length > 0) {
                gostReference = DataProcessor.generateBookReference(fieldsData.authors, fieldsData.title, fieldsData.edition, fieldsData.year, fieldsData.city, fieldsData.publisher, fieldsData.totalPages, manyAuthors, fieldsData.lastAuthor, fieldsData.editors);
            } else {
                // Если поле authors не определено или пустое, присваиваем пустую строку
                gostReference = '';
            }
            break;
        case 'journalArticle':
            // Проверяем, что поле authors определено и не пустое
            if (fieldsData.authors && fieldsData.authors.length > 0) {
                gostReference = DataProcessor.generateJournalArticleReference(fieldsData.authors.join(', '), fieldsData.articleTitle, fieldsData.journalName, fieldsData.publicationYear, fieldsData.issueNumber, fieldsData.pages);
            } else {
                // Если поле authors не определено или пустое, присваиваем пустую строку
                gostReference = '';
            }
            break;
            case 'internetResource':
                // Проверяем, что все необходимые поля для интернет-ресурса заполнены
                if (fieldsData.resourceTitle) {
                    gostReference = DataProcessor.generateInternetResourceReference(fieldsData.resourceTitle, fieldsData.siteName, fieldsData.hyperlink, fieldsData.accessDate);
                } else {
                    // Если какое-то из полей не заполнено, присваиваем пустую строку
                    gostReference = '';
                }
                break;
            default:
                break;
        }

    const reference = new BibliographicReference(gostReference);
    reference.displayReference();
    // Формирование второго блока вопросов в зависимости от введенных данных
    const additionalQuestionsHTML = AdditionalQuestions.generateAdditionalQuestions(sourceType, manyAuthors, includePages);

    const additionalFieldsContainer = document.getElementById('additionalFields');
    if (additionalFieldsContainer) {
        additionalFieldsContainer.innerHTML = additionalQuestionsHTML;
    }
    // Скрываем кнопку "ОК"
    const okButton = document.querySelector('button[type="submit"]');
    if (okButton) {
        okButton.setAttribute('style', 'display: none;');
    }

    // Показываем кнопку "Сформировать ссылку"
    const generateButton = document.getElementById('generateButton');
    if (generateButton) {
        generateButton.setAttribute('style', 'display: block;');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Привязываем обработчики событий

const form = document.getElementById('sourceForm') as HTMLFormElement;
form.addEventListener('submit', handleSubmit);

const generateButton = document.createElement('button');
generateButton.innerText = 'Сформировать ссылку';
generateButton.id = 'generateButton'; 
generateButton.addEventListener('click', handleSubmit);
form.appendChild(generateButton);

const copyButton = document.getElementById('copyButton');
if (copyButton) {
    copyButton.addEventListener('click', () => {
        const reference = new BibliographicReference((document.getElementById('reference') as HTMLElement).innerText);
        reference.copyReference();
    });
}
});