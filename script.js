// select the container element
const container = document.querySelector('.navigaatiopalsta');

// fetch the contents of the file
fetch('navigaatiopalsta.txt')
  .then(response => response.text())
  .then(data => {
    // parse the contents of the file as an array
    const listItems = data.split('\n');

    // create a new array of anchor elements
    const anchors = listItems.map(item => {
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = item.trim();
      return anchor;
    });

    // append the anchor elements to the container
    anchors.forEach(anchor => container.appendChild(anchor));
  })
  .catch(error => console.error(error));