
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const a = q.parentElement.querySelector('.faq-a');
    const wasOpen = a.style.maxHeight && a.style.maxHeight !== '0px';
    document.querySelectorAll('.faq-a').forEach(x => { x.style.maxHeight='0px'; x.classList.remove('open') });
    if (!wasOpen){
      a.style.maxHeight = a.scrollHeight + 'px';
      a.classList.add('open');
    }
  });
});
