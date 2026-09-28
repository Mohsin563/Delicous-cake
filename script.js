var lang='en';
function setLang(l){lang=l;document.documentElement.lang=l;
document.querySelectorAll('[data-en]').forEach(function(e){e.textContent=e.getAttribute('data-'+l)});
document.getElementById('lb').textContent=l==='en'?'ES':'EN'}
document.getElementById('lb').addEventListener('click',function(){setLang(lang==='en'?'es':'en')});
setLang('en');
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();
var txt='Hi Del Cielo Cakes! Inquiry\nName: '+n.value+'\nEvent date: '+d.value+'\nDetails: '+m.value;
var s=document.getElementById('s');
function go(){window.open('https://www.instagram.com/delcielocakes/','_blank','noopener')}
try{navigator.clipboard.writeText(txt).then(function(){s.textContent=lang==='en'?'Copied. Paste it into a DM on Instagram.':'Copiado. Pégalo en un DM de Instagram.';go()},function(){s.textContent=lang==='en'?'Copy failed. Please write your inquiry in an Instagram DM.':'No se pudo copiar. Escribe tu consulta en un DM.';go()})}
catch(err){s.textContent=lang==='en'?'Copy failed. Please write your inquiry in an Instagram DM.':'No se pudo copiar. Escribe tu consulta en un DM.';go()}
});
