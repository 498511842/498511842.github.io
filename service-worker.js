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
    "revision": "571f900b1172c508471af93fbbfb7ee7"
  },
  {
    "url": "about/index.html",
    "revision": "f4e7ad17fcdd68718dd6bb8264755d2f"
  },
  {
    "url": "assets/css/0.styles.a90f3995.css",
    "revision": "3303a3649c985ffe7eac9927153df65e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d0537da3.js",
    "revision": "e5a268493ee89ce750d1415959176dea"
  },
  {
    "url": "assets/js/10.4527d97e.js",
    "revision": "66633fc4c791319a106419094c629e9b"
  },
  {
    "url": "assets/js/11.2d60ef50.js",
    "revision": "e58cb66fb543a91b26b235517e2ce659"
  },
  {
    "url": "assets/js/12.4e49b7e3.js",
    "revision": "60329529dc18d7cb3c5e2c7a87534c55"
  },
  {
    "url": "assets/js/13.6bfe8012.js",
    "revision": "445a2a3ba190697b0eb9a24ac3d08f1d"
  },
  {
    "url": "assets/js/14.244d3a6d.js",
    "revision": "4e0f8c39076c3a71a0b6421fcd7295d1"
  },
  {
    "url": "assets/js/15.20b81cfb.js",
    "revision": "30852da4b5fa5e98ac8727ac00897c78"
  },
  {
    "url": "assets/js/16.29d094a0.js",
    "revision": "a5e6d49eb6119bcfc19aaf8ba75d28de"
  },
  {
    "url": "assets/js/17.28d9643d.js",
    "revision": "c415cecb57ea07ef29cedfb49fa014f8"
  },
  {
    "url": "assets/js/18.b052ecd7.js",
    "revision": "89eefadae9bdc84b85965012d6ca0869"
  },
  {
    "url": "assets/js/19.7a4a8f31.js",
    "revision": "230a8adfb7ef23f2964a232744987917"
  },
  {
    "url": "assets/js/2.649b2ffe.js",
    "revision": "89404ce731b3df8422395fa44ff0b2c9"
  },
  {
    "url": "assets/js/20.5954de84.js",
    "revision": "79083bac2ddd9b709b46719a7472af11"
  },
  {
    "url": "assets/js/21.a62bd882.js",
    "revision": "4e310bd1fb8f9b3254ed0ef7ce3006e6"
  },
  {
    "url": "assets/js/22.042385af.js",
    "revision": "8af6ccdabff77b4d668ca87d11f3c565"
  },
  {
    "url": "assets/js/23.1dbb6edc.js",
    "revision": "3281aff54895014408d4ba119c740359"
  },
  {
    "url": "assets/js/24.004683d0.js",
    "revision": "68d8f0270e2aa00da928ec99fa5025a7"
  },
  {
    "url": "assets/js/25.95f27cbd.js",
    "revision": "a14a9ce9a570bcb846aa17238f0ddbd0"
  },
  {
    "url": "assets/js/26.7ec73c4d.js",
    "revision": "5e8d367285c010e9d04dae9480ce5f2f"
  },
  {
    "url": "assets/js/27.671b6566.js",
    "revision": "114342a7b6ae2fe4de74f97fcadb6ff5"
  },
  {
    "url": "assets/js/28.bb147b4e.js",
    "revision": "b2787be8619349c466b791b63f880ead"
  },
  {
    "url": "assets/js/29.5d0c651a.js",
    "revision": "d171d867161e9a1795479a05e606da26"
  },
  {
    "url": "assets/js/30.d4666e29.js",
    "revision": "841958cad82ca58c619198f4e7d6d650"
  },
  {
    "url": "assets/js/31.e13593a1.js",
    "revision": "612fe4710b63b74e8c4ad5aafda957b8"
  },
  {
    "url": "assets/js/32.61aae228.js",
    "revision": "8e3b139606cd8948b2839d6f0a253ba1"
  },
  {
    "url": "assets/js/33.0951af36.js",
    "revision": "1cb710041363bd02cacfec505f6afc08"
  },
  {
    "url": "assets/js/34.f9118071.js",
    "revision": "27d11711cf3a4cd1d027aec4200055a0"
  },
  {
    "url": "assets/js/35.9d405f0b.js",
    "revision": "0dacb31fedb719ba33ffff5ea7431b61"
  },
  {
    "url": "assets/js/36.72a41989.js",
    "revision": "329299490b2c7363e963a1b4e0c0dd04"
  },
  {
    "url": "assets/js/37.cbcac676.js",
    "revision": "e5b44e8612429cdc5a726199c80c0d6e"
  },
  {
    "url": "assets/js/38.a0912396.js",
    "revision": "deadc096de215c1167b6e2083830a8b8"
  },
  {
    "url": "assets/js/39.2e636a68.js",
    "revision": "32d6d86a0de53a08f2ae09f9f8decaee"
  },
  {
    "url": "assets/js/4.129d171f.js",
    "revision": "6c5be10bb784415fab513493d9e5bcb3"
  },
  {
    "url": "assets/js/40.3ab0f6f6.js",
    "revision": "813164806c3fc77ba4fb06f759cbed77"
  },
  {
    "url": "assets/js/41.4713b822.js",
    "revision": "4c8bb7e56ea2aa7962a60e23fcca8ef0"
  },
  {
    "url": "assets/js/42.e5b4f576.js",
    "revision": "61529c8a35fa00ccf1d92326d5d7d11b"
  },
  {
    "url": "assets/js/43.7a6e3fd2.js",
    "revision": "4fe1dcc2e8596192f7127ca35f2d129b"
  },
  {
    "url": "assets/js/44.89587220.js",
    "revision": "15384fe40a2964eeb2e7f521090cbeff"
  },
  {
    "url": "assets/js/45.c1a1efce.js",
    "revision": "93a795a05440dead2ae5c1b8232c9db3"
  },
  {
    "url": "assets/js/46.034cd9df.js",
    "revision": "b1ec71bdbc6ff441403fd1dfc45e2b1d"
  },
  {
    "url": "assets/js/47.1ebed9ab.js",
    "revision": "d1727a6092a67a6fec695b343edf6d71"
  },
  {
    "url": "assets/js/48.38572a9e.js",
    "revision": "175b3f6c5d61c90324a8d1aaae54aa57"
  },
  {
    "url": "assets/js/49.e3dab363.js",
    "revision": "1e39eeb1a9b9c18b6fb07bb408dc92d5"
  },
  {
    "url": "assets/js/5.53e11bdf.js",
    "revision": "7973bd6c1b04a7c7aed7e54dd69aeb47"
  },
  {
    "url": "assets/js/50.17abedd2.js",
    "revision": "4b4368e4304c288d27480c923302413d"
  },
  {
    "url": "assets/js/51.55b1b147.js",
    "revision": "8bc5aa3b20796c5e5e410f082f312b58"
  },
  {
    "url": "assets/js/52.ac278e88.js",
    "revision": "ba66c9144739505f00767077b2dba2c7"
  },
  {
    "url": "assets/js/53.5295d0f1.js",
    "revision": "deebc93c24aba4306155fed39bc55fb7"
  },
  {
    "url": "assets/js/54.5bb64ead.js",
    "revision": "9cd42a53d7573f4b70ea64fbaa1c2e7d"
  },
  {
    "url": "assets/js/6.392b7faf.js",
    "revision": "3046435dda50e72cbf31b6602f490b39"
  },
  {
    "url": "assets/js/7.c4eb79fe.js",
    "revision": "fe234cd506d179a8a580f3af8e94db7c"
  },
  {
    "url": "assets/js/8.0da04378.js",
    "revision": "d0ae63facd66d86c2b724bd98876c136"
  },
  {
    "url": "assets/js/9.8a4f4b01.js",
    "revision": "28d29fcad468d32b2ff56c9745bdd57b"
  },
  {
    "url": "assets/js/app.eb6181bd.js",
    "revision": "a681809ce45cc4c9cb412534d08f68cb"
  },
  {
    "url": "blogs/C#/index.html",
    "revision": "571f900b1172c508471af93fbbfb7ee7"
  },
  {
    "url": "blogs/hexo/index.html",
    "revision": "706597ab364253f63817500a1c7476fe"
  },
  {
    "url": "blogs/index.html",
    "revision": "c0bf9f4223da5561ee074981d6ec65fe"
  },
  {
    "url": "blogs/Java/index.html",
    "revision": "29e80b8feb3d4d5e9ad48ee82451f102"
  },
  {
    "url": "blogs/tools/DevEco Studio.html",
    "revision": "e04a075a4f27f552aced23048b161343"
  },
  {
    "url": "blogs/tools/index.html",
    "revision": "88d9933675034fcd4e1cf436bcef60f1"
  },
  {
    "url": "categories/C#/index.html",
    "revision": "571f900b1172c508471af93fbbfb7ee7"
  },
  {
    "url": "categories/hexo/index.html",
    "revision": "23c6ce3b019666bf14816a413ae8a9b5"
  },
  {
    "url": "categories/html/index.html",
    "revision": "80c01aee611226d985c368b7dbb0200c"
  },
  {
    "url": "categories/html/page/2/index.html",
    "revision": "f1f260bcab3cdd24527fdd6fcd1edb96"
  },
  {
    "url": "categories/index.html",
    "revision": "e04d44cc4ab35e67655fa25c5f4e4578"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6c2d5aebf420daa5be1ee8821b03d06d"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "0f4644073a5aed631242f0f19044452f"
  },
  {
    "url": "categories/log/index.html",
    "revision": "ef97d6cd2bb9ed57124435608690a910"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "cb11ba421bffbfa3f291161191c75470"
  },
  {
    "url": "categories/spring/index.html",
    "revision": "bb5e9084f1ed9084ecebb8222f644e68"
  },
  {
    "url": "categories/tools/index.html",
    "revision": "0424959e0fc6551a7eefdd9117544239"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "8e5b6a80f7742851038ef02c140a31d3"
  },
  {
    "url": "docs/HTML/02 HTML简介.html",
    "revision": "63a4b4964e38e49631f24610a3629282"
  },
  {
    "url": "docs/HTML/03 HTML编辑器.html",
    "revision": "9ced4804a44cf998d8aecefc6e9d4b78"
  },
  {
    "url": "docs/HTML/04 HTML基础.html",
    "revision": "e69d999dcb6a7ab94488aa2f24329385"
  },
  {
    "url": "docs/HTML/05 HTML元素.html",
    "revision": "f92f2b319a4eb91e8feba03983c6b75e"
  },
  {
    "url": "docs/HTML/06 HTML属性.html",
    "revision": "d29ee638dae9bfa7d4ff197762546a90"
  },
  {
    "url": "docs/HTML/07 HTML标题.html",
    "revision": "56efa63b869b38cd5a214c1a074e798c"
  },
  {
    "url": "docs/HTML/08 HTML段落.html",
    "revision": "c790c89a92159e458f8386c9a7c3249e"
  },
  {
    "url": "docs/HTML/09 HTML样式.html",
    "revision": "a63edc634f2d0d292eeb719af9cf4107"
  },
  {
    "url": "docs/HTML/10 HTML格式化.html",
    "revision": "adb53b2885d539c4d3ae1d522fcde7a3"
  },
  {
    "url": "docs/HTML/11 HTML引用.html",
    "revision": "05e5609f74b440d1cd5d4f7c674f127c"
  },
  {
    "url": "docs/HTML/index.html",
    "revision": "99cb47be3254adab3df9698f0cc4b689"
  },
  {
    "url": "docs/Linux/centos.html",
    "revision": "dab2b2d40c32fb373f51e52c908da2a4"
  },
  {
    "url": "docs/Linux/index.html",
    "revision": "541ec4c9febc73f272300462b9f951da"
  },
  {
    "url": "docs/Linux/Ubuntu.html",
    "revision": "7645d6ca572758427b187badf6cc970a"
  },
  {
    "url": "docs/Markdown/01.Markdown教程.html",
    "revision": "048415d053cc84d9b72178c7a07c146c"
  },
  {
    "url": "docs/Markdown/02.Markdown标题.html",
    "revision": "32b1c642772c02f102b3684807980648"
  },
  {
    "url": "docs/Markdown/03.Markdown段落.html",
    "revision": "6d70c44f2d54c154a30313e592b8695e"
  },
  {
    "url": "docs/Markdown/04.Markdown列表.html",
    "revision": "4cbd2dff660dd6f9671e2fdd332af3ad"
  },
  {
    "url": "docs/Markdown/05.Markdown区块.html",
    "revision": "44018c9159970b9b917fa701c00f7056"
  },
  {
    "url": "docs/Markdown/06.Markdown代码.html",
    "revision": "ad01019d0482db550b4055c42c142206"
  },
  {
    "url": "docs/Markdown/07.Markdown链接.html",
    "revision": "efc610c3f9dce4f5f1a3cfd3b78dfd9d"
  },
  {
    "url": "docs/Markdown/08.Markdown图片.html",
    "revision": "c8d8bf340bec72af9111eb07d98f7f40"
  },
  {
    "url": "docs/Markdown/09.Markdown表格.html",
    "revision": "717ca27b313d37d7396960bf981b43cf"
  },
  {
    "url": "docs/Markdown/10.Markdown高级技巧.html",
    "revision": "9eb12174314be283e2f9d4375c22ccae"
  },
  {
    "url": "docs/Markdown/index.html",
    "revision": "be6ad299119c3884c5da4bbbf6839e7f"
  },
  {
    "url": "docs/mylog/index.html",
    "revision": "2aa5957ef7070587adf4fffbf9005400"
  },
  {
    "url": "docs/sketch/gg1.html",
    "revision": "2bd8a893cb382573c0680e0ee16c555d"
  },
  {
    "url": "docs/sketch/gg2.html",
    "revision": "59434077fd2a5fe0f7cf8a2257076fbe"
  },
  {
    "url": "docs/sketch/index.html",
    "revision": "121b1d4ea078cd3c8a1201f49c1b8a47"
  },
  {
    "url": "docs/spring/1.spring.html",
    "revision": "9d8ae232b2ccdf48ffc819ae5562c9c0"
  },
  {
    "url": "docs/spring/2.IOC理论推导.html",
    "revision": "cbe1fc17a19aec23c4e98da574d48d1a"
  },
  {
    "url": "docs/spring/index.html",
    "revision": "26d4007c547cf04b26aa1ed78d43da61"
  },
  {
    "url": "docs/vuepress/01.快速开始.html",
    "revision": "4077dd1bde1afd7a0e21c54e43368f58"
  },
  {
    "url": "docs/vuepress/index.html",
    "revision": "d691c1bfcfef3f87ebcee535f688da6b"
  },
  {
    "url": "img/Alipay.jpg",
    "revision": "f2d94845ab33ce407a7ccc11e63dbebb"
  },
  {
    "url": "img/earth.jpg",
    "revision": "1300888839f4e3f61ded4e307d4ae988"
  },
  {
    "url": "img/earth1.jpg",
    "revision": "59ddc84fa9c81a67383b7b0c927b7d36"
  },
  {
    "url": "img/fengjing.jpg",
    "revision": "8dbf8e136e7d71653b63fdbd4d17fb6c"
  },
  {
    "url": "img/liaren.jpg",
    "revision": "f1685961044bbee058ead74fd00b7e90"
  },
  {
    "url": "img/OIP.jpg",
    "revision": "e61f927ffe2161a9779ba399ad0d8713"
  },
  {
    "url": "img/pan_c.png",
    "revision": "b6e57a9a78bf9a88f27c288412b39d77"
  },
  {
    "url": "img/pan.png",
    "revision": "b3ad9070c5ae5b8dfe066e11f6ecad83"
  },
  {
    "url": "img/panblog.png",
    "revision": "e50700a76d1aee9a3e53d695bf9eab09"
  },
  {
    "url": "img/shan.jpg",
    "revision": "ebd1204069e78646961264c98c8fb259"
  },
  {
    "url": "img/shui.jpg",
    "revision": "871c80564c4b3f2ed0df3db9e6f8669d"
  },
  {
    "url": "img/sun.jpg",
    "revision": "44ecb9830f69ec7fabf76aaf4f7bd4d5"
  },
  {
    "url": "img/touxiang.jpg",
    "revision": "9fe195a83abaaa2669ae38598cf3a2c5"
  },
  {
    "url": "img/tree.jpg",
    "revision": "faa5f7cbb09fb8943238b84c25527cbe"
  },
  {
    "url": "img/wechat.jpg",
    "revision": "18153f94e86bc8f0881bd1ba28870cfc"
  },
  {
    "url": "img/zise.jpg",
    "revision": "cb01323c6f95d1d2e9ce3947609f5e07"
  },
  {
    "url": "img/zp.png",
    "revision": "eccbd88da290144ce6f0303b71979d18"
  },
  {
    "url": "img/zp1.png",
    "revision": "e308b776642fab218cea72b9e298d7fd"
  },
  {
    "url": "index.html",
    "revision": "87cfd6ef5a020899706959d53ecb7b9a"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "571f900b1172c508471af93fbbfb7ee7"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "67464477e23b1dbb617d728b12b5c7ce"
  },
  {
    "url": "tag/index.html",
    "revision": "c91514462255e988622836aa9acdb378"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "3e593ae98e5562c2f2dd8cd205031992"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9297fa23d5e0bdde762ed59cbe0e7fbd"
  },
  {
    "url": "tag/log/index.html",
    "revision": "d00540ef1fe3117988d8f7c76b0d5804"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "420dadc47474a15fed2bf070cbbbcecb"
  },
  {
    "url": "timeline/index.html",
    "revision": "84f625c144cf991cbec59a42beeb6dea"
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
