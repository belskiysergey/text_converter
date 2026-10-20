const textInput = document.getElementById('textInput');

textInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const text = textInput.value.trim();

        if (!text) return;

        const convertedText = text
            .toLocaleLowerCase('ru-RU')
            .replace(/(^|[^\p{L}\p{M}\p{N}_])([\p{L}])/gu,
                (match, separator, letter) =>
                    separator + letter.toLocaleUpperCase('ru-RU')
            );

        textInput.value = convertedText;
        textInput.select();
    }
});
