const bgContainer = document.querySelector('.bg-container');
const bgItems = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'
    , '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png'
    , '19.png', '20.png', '21.png', '22.png', '23.png', '24.png'
];

function createBgItem() {
    const bgItem = document.createElement('img');
    bgItem.className = 'bg-item';
    bgItem.src = `../src/${bgItems[Math.floor(Math.random() * bgItems.length)]}`;
    bgItem.style.left = `${Math.random() * 100}%`;
    bgItem.style.top = `${Math.random() * 100}%`;
    bgItem.style.transform = `translate(-50%, -50%) scale(${Math.random()*0.05 + 0.05})`;
    
    // bgContainer.appendChild(bgItem);
    
    // setTimeout(() => bgItem.remove(), 10000);
    bgItem.style.opacity = 0;
    bgContainer.appendChild(bgItem);

    setTimeout(() => {
        bgItem.style.opacity = 1;
        setTimeout(() => {
            bgItem.style.opacity = 0;
            setTimeout(() => bgItem.remove(), 1000);
        }, 8000);
    }, 100);
}

setInterval(createBgItem, 1000);

  
//   document.addEventListener('mousemove', handleMouseMove);
// const writingArea = document.querySelector('.writing-area');

//   function saveFile() {
//     const content = writingArea.textContent;
//     const blob = new Blob([content], { type: 'text/plain' });
//     const anchor = document.createElement('a');
//     anchor.download = 'untitled.txt';
//     anchor.href = URL.createObjectURL(blob);
//     anchor.click();
//   }

//   function loadFile(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function() {
//       writingArea.textContent = reader.result;
//     };
//     reader.readAsText(file);
//   }

//   document.getElementById('saveBtn').addEventListener('click', saveFile);
//   document.getElementById('loadBtn').addEventListener('change', loadFile);

//   const toolbar = document.querySelector('.toolbar');
  
//   toolbar.addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//       const command = event.target.dataset.command;
//       document.execCommand(command, false, null);
//     }
//   });

  var simplemde = new SimpleMDE({ element: document.getElementById("editor") });
  document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
      var content = e.target.result;
      simplemde.value(content);
    };
    
    reader.readAsText(file);
  });
  
  function showSaveDialog() {
    document.getElementById('saveDialog').style.display = 'block';
  }
  
  function saveFile() {
    var content = simplemde.value();
    var fileName = document.getElementById('fileName').value;
    var blob = new Blob([content], { type: 'text/markdown' });
    
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName + '.md';
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    document.getElementById('saveDialog').style.display = 'none';
  }

  function cancelSave() {
    document.getElementById('saveDialog').style.display = 'none';
  }