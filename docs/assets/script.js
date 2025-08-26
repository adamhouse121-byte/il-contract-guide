
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const tgt = document.getElementById(id);
  if(tgt){
    e.preventDefault();
    tgt.scrollIntoView({behavior:'smooth', block:'start'});
    history.replaceState(null, '', '#'+id);
  }
});

;(() => {
  const share = document.getElementById('share');
  if(!share) return;
  share.addEventListener('click', (e) => {
    e.preventDefault();
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({title: document.title, url}).catch(()=>{});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => alert('Link copied!'));
    } else {
      prompt('Copy this link:', url);
    }
  });
})();
