const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach(p => {
  p.addEventListener('dragover', dragover);
  p.addEventListener('dragenter', dragenter);
  p.addEventListener('dragleave', dragleave);
  p.addEventListener('drop', drop);
});

function dragstart(e) {
  console.log('drag start', e.target);
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
  console.log('drag end', e);
  e.target.classList.remove('hold', 'hide');
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add('hovered');
}
function dragleave(e) {
  e.target.classList.remove('hovered');
}
function drop(e) {
  e.target.append(item);
  e.target.classList.remove('hovered');
}
