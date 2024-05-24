export class BibliographicReference {
    private reference: string;

    constructor(reference: string) {
        this.reference = reference;
    }
    displayReference(): void {
        const referenceContainer = document.getElementById('reference');
        if (referenceContainer) {
            referenceContainer.innerText = this.reference;
        }
    }

    async copyReference(): Promise<void> {
        const referenceContainer = document.getElementById('reference');
        if (referenceContainer) {
            try {
                await navigator.clipboard.writeText(referenceContainer.innerText);
                alert('Ссылка успешно скопирована');
            } catch (err) {
                alert('Ошибка при копировании ссылки');
            }
        }
    }
}