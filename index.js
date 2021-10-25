const panels = document.querySelectorAll('.panel');

let selectedPanel;

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    if (selectedPanel === panel.innerText) {
      selectedPanel = undefined;
      removeAllExpand();
      return;
    }
    removeAllExpand();
    panel.classList.add('expand');
    selectedPanel = panel.innerText;
  });
});

const removeAllExpand = () => {
  panels.forEach((panel) => {
    panel.classList.remove('expand');
  });
};
