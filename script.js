document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let author = document.getElementById('author').value.trim();
    let title = document.getElementById('title').value.trim();
    let category = document.getElementById('category').value.trim();
    let content = document.getElementById('content').value.trim();

    let postArticle = document.createElement('article');
    let postHeader = document.createElement('h1');
    postHeader.textContent = title;
    let postAuthor = document.createElement('p');
    postAuthor.textContent = `Автор: ${author}`;
    let postCategory = document.createElement('p');
    postCategory.textContent = `Категория: ${category}`;
    let postContent = document.createElement('p');
    postContent.textContent = content;

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        postArticle.remove();
    });

    let archiveButton = document.createElement('button');
    archiveButton.textContent = 'Архив';
    archiveButton.className = 'archive';
    archiveButton.addEventListener('click', function() {
        let archiveList = document.getElementById('archiveList');
        let archiveItem = document.createElement('li');
        archiveItem.textContent = title;
        archiveList.appendChild(archiveItem);
        postArticle.remove();
    });

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(archiveButton);

    postArticle.appendChild(postHeader);
    postArticle.appendChild(postAuthor);
    postArticle.appendChild(postCategory);
    postArticle.appendChild(postContent);
    postArticle.appendChild(buttonContainer);

    document.getElementById('postsList').appendChild(postArticle);

    document.getElementById('postForm').reset();
});
