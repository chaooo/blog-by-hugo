// add custom js in this file

// copy code
(function codeCopyActions(){
    const highlightWrap = 'highlight';
    function isItem(target, id) {
        // if is item or within item
        return target.matches(`.${id}`) || target.closest(`.${id}`);
    }

    function codeBlocks() {
        const markedCodeBlocks = elems('code');
        return Array.from(markedCodeBlocks).filter(function (block) {
            return hasClasses(block) && !Array.from(block.classList).includes('noClass');
        }).map(function (block) {
            return block
        });
    }

    function copyCode(codeElement) {
        lineNumbers = elems('.ln', codeElement);
        // remove line numbers before copying
        if(lineNumbers.length) {
            lineNumbers.forEach(function(line){
                line.remove();
            });
        }
        const codeToCopy = codeElement.textContent;
        // copy code
        copyToClipboard(codeToCopy);
    }

    (function addLangLabel() {
        const blocks = codeBlocks();
        blocks.forEach(function(block){
            // lang label
            let label = block.dataset.lang;
            label = label === 'sh' ? 'bash' : label;
            if(label !== "fallback") {
                const labelEl = createEl();
                labelEl.textContent = label;
                pushClass(labelEl, 'lang');
                block.closest(`.${highlightWrap}`).appendChild(labelEl);
            }
            // copy button
            const copyBtn = createEl('a');
            copyBtn.href = '#';
            copyBtn.title = 'Copy Code';
            copyBtn.className = 'copy';
            copyBtn.style.backgroundImage = `url(${baseURL}${iconsPath}copy.svg)`;
            block.closest(`.${highlightWrap}`).appendChild(copyBtn);
        });
    })();
    doc.addEventListener('click', function(event){
        // copy code block
        const target = event.target;
        const isCopyIcon = isItem(target, 'copy');
        if(isCopyIcon) {
            event.preventDefault();
            const codeElement = target.closest(`.${highlightWrap}`).firstElementChild.firstElementChild;
            if(isCopyIcon) {
                // clone code element
                const codeElementClone = codeElement.cloneNode(true);
                copyCode(codeElementClone);
            }
        }
    });
})();