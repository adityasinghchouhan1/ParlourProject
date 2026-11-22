import http from 'http';

const routes = [
  '/',
  '/about',
  '/services',
  '/services/hd-bridal-makeup-artistry',
  '/packages',
  '/gallery',
  '/team',
  '/contact',
  '/book-appointment'
];

async function checkRoute(route) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:4173${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          hasRoot: data.includes('id="root"'),
          title: (data.match(/<title>(.*?)<\/title>/) || [])[1]
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- Verifying Server Routes on http://localhost:4173 ---');
  for (const r of routes) {
    try {
      const res = await checkRoute(r);
      console.log(`✓ [${res.statusCode}] ${res.route} - ${res.contentType} (Length: ${res.length}, hasRoot: ${res.hasRoot})`);
    } catch (e) {
      console.error(`✗ Error accessing ${r}:`, e.message);
    }
  }
}

run();
