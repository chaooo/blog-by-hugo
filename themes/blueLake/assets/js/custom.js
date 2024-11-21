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
            const codeParent = block.closest(`.${highlightWrap}`);
            if (codeParent) {
                // lang label
                let label = block.dataset.lang;
                label = label === 'sh' ? 'bash' : label;
                if(label !== "fallback") {
                    const labelEl = createEl();
                    labelEl.textContent = label;
                    pushClass(labelEl, 'lang');
                    codeParent.appendChild(labelEl);
                }
                // copy button
                const copyBtn = createEl('a');
                copyBtn.href = '#';
                copyBtn.title = 'Copy Code';
                copyBtn.className = 'copy';
                copyBtn.style.backgroundImage = `url(${baseURL}${iconsPath}copy.svg)`;
                codeParent.appendChild(copyBtn);
            }
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

// zoom img
(function zoomImage(){
    // 获取模态框
    const modal = document.getElementById("modalImage");
    // 获取模态框中的图片元素
    const modalImg = modal.querySelector(".image");
    // 获取post_content所有图片
    const images = document.querySelector(".post_content").querySelectorAll("img");
    // 为每张图片添加点击事件监听器
    images.forEach(function (image) {
        image.addEventListener("click", function () {
            modalImg.src = this.src; // 将点击的图片路径设置到模态框的图片中
            modal.style.display = "block"; // 显示模态框
        });
    });
    // 获取关闭按钮
    const close = modal.querySelector(".close");
    // 当用户点击关闭按钮时，隐藏模态框
    close.addEventListener("click", function () {
        modal.style.display = "none";
    });
    // 当用户点击模态框外部区域时，隐藏模态框
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
})();
