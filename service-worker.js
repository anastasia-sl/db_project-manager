/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a3063a9a4e2680ebfda57f43bd41313"
  },
  {
    "url": "assets/css/0.styles.dcacb46d.css",
    "revision": "866b5838769479eec153c54b4cf24d5f"
  },
  {
    "url": "assets/img/CreateUserReq.a28fe965.jpg",
    "revision": "a28fe9656433a8097ff767429a328352"
  },
  {
    "url": "assets/img/DeleteUserReq.2e69aa7c.png",
    "revision": "2e69aa7c9a4dda429f0ab89962a7fb00"
  },
  {
    "url": "assets/img/GetAllReq.f0e0b96a.png",
    "revision": "f0e0b96a5b0c55d46d6f175b685c206b"
  },
  {
    "url": "assets/img/GetByIdReq.7eb6b3b7.png",
    "revision": "7eb6b3b7fdb0f6c205201b6250feb5f3"
  },
  {
    "url": "assets/img/GetByIdRes.1ee3e8bb.png",
    "revision": "1ee3e8bb5acfd25c4d2e221a7c9f9098"
  },
  {
    "url": "assets/img/rel_scheme.aa1ccce9.png",
    "revision": "aa1ccce90d0880d0a3215ed919ec1cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/UpdateUserReq.77640270.png",
    "revision": "776402705a5468dab7329f6216d576e8"
  },
  {
    "url": "assets/js/1.a50b627f.js",
    "revision": "a0035b1b53d6421e3ef1d5f0f8c8d94b"
  },
  {
    "url": "assets/js/10.1480a105.js",
    "revision": "a2c8d6dbd2c5534e06a0469f5e5be230"
  },
  {
    "url": "assets/js/13.ec96bec6.js",
    "revision": "4119a7ab2f736278df5e54b7744aa96a"
  },
  {
    "url": "assets/js/14.8f152714.js",
    "revision": "00ba53c49061d163593ec25330721735"
  },
  {
    "url": "assets/js/15.724b3d57.js",
    "revision": "b10124742a8d9f5a2516985c267989c3"
  },
  {
    "url": "assets/js/16.2e8f2406.js",
    "revision": "73fb891db730b4d4ca35fcd99d49bfb0"
  },
  {
    "url": "assets/js/17.40a918a4.js",
    "revision": "b955e14c41f6c05543ad641824e95d19"
  },
  {
    "url": "assets/js/18.15adf88e.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.6010a24d.js",
    "revision": "45db4b71d30831cb67fc7d0be4d7767f"
  },
  {
    "url": "assets/js/20.ad2f3ef0.js",
    "revision": "22b57d887617565ed937e383000d0a24"
  },
  {
    "url": "assets/js/21.99b82fa4.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.c67875c4.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.a775c2fa.js",
    "revision": "e6cae50874390355e41c7ffd7c3b46a5"
  },
  {
    "url": "assets/js/25.e0495cad.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.ad577dbc.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.5a575ac0.js",
    "revision": "3da310e9c588a02a77d278ba82c9e4d2"
  },
  {
    "url": "assets/js/28.0aad70fc.js",
    "revision": "6ead34b6f92e1b73554d36e399ea29f2"
  },
  {
    "url": "assets/js/29.6944b056.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5fb97a49.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.8f2e48b5.js",
    "revision": "b7909dae1f26fc7807e7645bd8370c44"
  },
  {
    "url": "assets/js/31.5c38105c.js",
    "revision": "aa2d0a25272fc252afbab959c28faa26"
  },
  {
    "url": "assets/js/32.83d81a59.js",
    "revision": "ffef3e6d5a739e2716e28f6c5e7224c3"
  },
  {
    "url": "assets/js/33.9671411a.js",
    "revision": "a89a2b04a89713add4c12c15cad7aad2"
  },
  {
    "url": "assets/js/34.c6ee2989.js",
    "revision": "2e04c098fe8053745a7f78b1cbd35c85"
  },
  {
    "url": "assets/js/35.b86b5a50.js",
    "revision": "fff502c03765a5017a8d33f124fe60d2"
  },
  {
    "url": "assets/js/36.800eab7b.js",
    "revision": "09dde742680852c5138116aefee2b999"
  },
  {
    "url": "assets/js/37.1081765d.js",
    "revision": "8ece4185e9310c489ede50970a5036f5"
  },
  {
    "url": "assets/js/38.1c97cc02.js",
    "revision": "1c17fc7bc53e384b620977019f946fc4"
  },
  {
    "url": "assets/js/39.495c6840.js",
    "revision": "feeca698d590742ba52dfa7ce3b55a04"
  },
  {
    "url": "assets/js/4.f22e4f51.js",
    "revision": "0da22bb342e2056ee1a1efea60c2fdab"
  },
  {
    "url": "assets/js/41.f8eb18c3.js",
    "revision": "9c5146a9be29a7d120e4bd85bcfed24a"
  },
  {
    "url": "assets/js/5.ea13b65b.js",
    "revision": "1483068be4ec9a10aedbbc228f8f1486"
  },
  {
    "url": "assets/js/6.4117c9c5.js",
    "revision": "7d18c32a329680bd930314e30080b036"
  },
  {
    "url": "assets/js/7.15f64505.js",
    "revision": "8528778f9092e25a136a3617aacbe26d"
  },
  {
    "url": "assets/js/8.83d2bb23.js",
    "revision": "57490fa037c377505c178dd3d529a198"
  },
  {
    "url": "assets/js/9.ba694011.js",
    "revision": "7ae6a3f503420b73a1f70753ffdd5e9a"
  },
  {
    "url": "assets/js/app.6aa7dd31.js",
    "revision": "262c8cff54f4b0f75c79c02b9c83a673"
  },
  {
    "url": "assets/js/vendors~docsearch.2184b1dd.js",
    "revision": "01042a29b434baef327ddd17f11933e9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "bf8a1329a0047a1b83b447c29622a421"
  },
  {
    "url": "design/index.html",
    "revision": "d49b811496977d85417b52465333f795"
  },
  {
    "url": "index.html",
    "revision": "a4c1ca030965d2d381c78566dcdc1af8"
  },
  {
    "url": "intro/index.html",
    "revision": "7fd902a48d6197ddf30dd476daa733d1"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "23f63cc4f581c901c55768af021705f6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6eff66025c303f381a818f2e47c57131"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a7bd7c641e54aeeb488f7a623213cbf3"
  },
  {
    "url": "software/index.html",
    "revision": "547627fb1713be84f46ce02472b0149f"
  },
  {
    "url": "test/index.html",
    "revision": "a0d91dc5e7f71465b6c038aebd0742a2"
  },
  {
    "url": "use cases/index.html",
    "revision": "b952aa1ba01bc8a9102c9e67660eca0e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
