

  window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    document.getElementById('title').input =  parsedUrl.searchParams.get('title');
    document.getElementById('text').input=parsedUrl.searchParams.get('text');
    document.getElementById('url').input= parsedUrl.searchParams.get('url');
  });



