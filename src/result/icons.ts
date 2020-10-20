/**
  empty_svg_error
  empty_svg_search
  empty_svg_signal
  empty_svg_text
  result_svg_ban
  result_svg_error
  result_svg_question
  result_svg_success
  result_svg_warn
 */

// 空白占位公共部分-变量定义
const defsNode = `<defs>
  <linearGradient x1="64.022%" y1="100%" x2="64.022%" y2="0%" id="linearGradient-1">
  <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>
  <stop stop-color="#F2F3F5" offset="100%"></stop>
  </linearGradient>
  <linearGradient x1="64.022%" y1="96.956%" x2="64.022%" y2="0%" id="linearGradient-2">
  <stop stop-color="#F2F3F5" stop-opacity="0.3" offset="0%"></stop>
  <stop stop-color="#F2F3F5" offset="100%"></stop>
  </linearGradient>
  <linearGradient x1="64.022%" y1="50.0856347%" x2="64.022%" y2="0%" id="linearGradient-3">
  <stop stop-color="#F2F3F5" stop-opacity="0.3" offset="0%"></stop>
  <stop stop-color="#F2F3F5" offset="100%"></stop>
  </linearGradient>
  <linearGradient x1="64.022%" y1="100%" x2="64.022%" y2="0%" id="linearGradient-4">
  <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>
  <stop stop-color="#F2F3F5" offset="100%"></stop>
  </linearGradient>
  <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="100%" gradientTransform="translate(0.500000,0.000000),scale(0.131250,1.000000),rotate(90.000000),translate(-0.500000,-0.000000)" id="radialGradient-5">
  <stop stop-color="#EBEDF0" offset="0%"></stop>
  <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
  </radialGradient>
  <linearGradient x1="50%" y1="0%" x2="50%" y2="63.7249246%" id="linearGradient-6">
  <stop stop-color="#EBEDF0" offset="0%"></stop>
  <stop stop-color="#DCDEE0" stop-opacity="0" offset="100%"></stop>
  </linearGradient>
  <filter id="filter-7">
    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.847000 0 0 0 0 0.847000 0 0 0 0 0.847000 0 0 0 1.000000 0"></feColorMatrix>
  </filter>
</defs>`;

// 空白占位公共部分-背景图
const emptyImgBg = `<g id="编组" opacity="0.8" fill-rule="nonzero">
<polygon id="路径" fill="url(#linearGradient-1)" transform="translate(24.000000, 90.000000) scale(-1, 1) translate(-24.000000, -90.000000) " points="7 129 7 51 27 51 27 71 41 71 41 129"></polygon>
<path d="M47.5,10 L47.62,9.995 L56,16 C55.7338147,12.9851329 57.1918168,10.0781663 59.7673807,8.48859123 C62.3429446,6.89901615 65.5950554,6.89901615 68.1706193,8.48859123 C70.7461832,10.0781663 72.2041853,12.9851329 71.938,16 L71.938,32 L41,32 L41,31.826 C41.4436221,34.3785055 40.3290859,36.9507159 38.1633665,38.3725964 C35.997647,39.7944769 33.194353,39.7944769 31.0286335,38.3725964 C28.8629141,36.9507159 27.7483779,34.3785055 28.192,31.826 C20.7842047,37.6780092 10.0350092,36.4167953 4.183,29.009 C-1.66900921,21.6012047 -0.407795349,10.8520092 7,5 C20.720142,2.95429639 30.4653126,2.28762972 36.2355119,3 C39.4653126,3.39874083 43.220142,5.73207417 47.5,10 Z" id="路径" fill="url(#linearGradient-2)"></path>
<path d="M84.977402,0.0023070182 L85.2907005,-0.004 C89.0327802,-0.004 92.066,2.69225028 92.066,6.01604887 C92.066,9.34142422 89.0327802,12.0360977 85.2907005,12.0360977 C85.003656,12.0360977 84.7218624,12.0203302 84.4435693,11.9887951 L84.4435693,12.0360977 L72.5872327,12.0360977 L72.5872327,11.9052271 C69.5122588,11.869254 67.046154,9.60393157 67.066,6.83362608 C67.0860867,4.06332059 69.5846358,1.82703689 72.659869,1.82703689 C75.7351021,1.82703689 78.2336512,4.06332059 78.2536176,6.83362608 C78.2735839,9.60393157 75.8074791,11.869254 72.7325052,11.9052271 C75.1618815,16.5582298 72.6974998,14.3681177 72.6974998,11.6671372 C72.6974998,9.08756673 74.9448479,6.97471564 77.792539,6.7886586 C81.1847835,6.89488574 83.8566228,9.43068498 83.7976554,12.4880169 C83.7386879,15.5453488 80.9706738,17.996 77.5763805,17.996 C74.1820873,17.996 71.4140732,15.5453488 71.3551057,12.4880169 C71.2961383,9.43068498 73.9679776,6.89488574 77.3602221,6.7886586 C77.3602221,3.25672841 80.5842215,0.391765392 84.5590872,0.391765392 L84.977402,0.0023070182 Z" id="路径" fill="url(#linearGradient-3)"></path>
<polygon id="路径" fill="url(#linearGradient-4)" points="128 13 142 14.4118542 150.231 27 159 27 159 104.37 128 104.37"></polygon>
<polygon id="路径" fill="url(#linearGradient-4)" transform="translate(111.500000, 48.685000) scale(-1, 1) translate(-111.500000, -48.685000) " points="96 3 118.231 3 118.231 17 127 17 127 94.37 96 94.37"></polygon>
</g>
<polygon id="路径" fill="url(#radialGradient-5)" fill-rule="nonzero" points="5 137 165 137 165 158 5 158"></polygon>
<path d="M85,52 L85,78.742 C85,79.972 84.185937,80.969 83.1816266,80.969 L81.9192982,80.969 C71.3290234,90.1443827 56.6705933,87.0681312 49.1787783,74.098 C41.6869632,61.1278688 44.1987611,43.1753827 54.7890359,34 L54.7890359,65.326 C47.7258464,65.326 42,58.313436 42,49.663 C42,41.012564 47.7258464,34 54.7890359,34 C64.3676736,35.5592903 70.8913654,37.3722925 74.3601114,39.4390067 C77.6049129,41.3722925 81.1515425,45.5592903 85,52 Z" id="路径" fill="url(#linearGradient-6)" fill-rule="nonzero"></path>`;

// SVG图标
const icons: { [key: string]: string } = {
  empty_svg_error: `<svg viewBox="0 0 165 158" version="1.1">
  <title>占位-失败</title>
  ${defsNode}
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="占位-失败">
          ${emptyImgBg}
          <g filter="url(#filter-7)" id="编组" opacity="0.8">
              <g transform="translate(47.000000, 68.000000)">
                  <path d="M5.83808449,68.5748913 C4.29525007,68.5836333 2.81234521,67.9900235 1.71694023,66.9251888 C0.618088481,65.8570541 0,64.4030639 0,62.8862617 C0,61.3694596 0.618088481,59.9154694 1.71694023,58.8473347 L26.7920714,34.4431138 L2.18129456,9.98200658 C0.535759022,8.58005102 -0.169300776,6.39256406 0.355890227,4.31858885 C0.881081231,2.24461364 2.54792207,0.634034717 4.67135182,0.148789711 C6.79478157,-0.336455296 9.0165726,0.385495601 10.423583,2.0179252 L34.8602271,26.2514872 L59.7612254,1.96103888 C62.0372705,-0.269598922 65.7274688,-0.269598922 68.0035139,1.96103888 C70.2795591,4.19167667 70.2795591,7.80825511 68.0035139,10.0388929 L43.1605599,34.4431138 L68.0035139,59.0179936 C69.6490493,60.4199492 70.354109,62.6074361 69.828918,64.6814113 C69.3037269,66.7553864 67.6368862,68.3659653 65.5134565,68.8512103 C63.3900268,69.3364553 61.1682359,68.6145045 59.7612254,66.982075 L34.8602271,42.4071952 L9.95922875,66.9251888 C8.86382377,67.9900235 7.38091891,68.5836333 5.83808449,68.5748913 L5.83808449,68.5748913 Z" id="路径" fill="#383B48" fill-rule="nonzero"></path>
              </g>
          </g>
      </g>
  </g>
</svg>`,
  empty_svg_search: `<svg viewBox="0 0 165 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>占位-搜索</title>
  ${defsNode}
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="占位-搜索">
          ${emptyImgBg}
          <g filter="url(#filter-7)" id="编组" opacity="0.8">
              <g transform="translate(82.000000, 102.500000) scale(-1, 1) translate(-82.000000, -102.500000) translate(48.000000, 68.000000)">
                  <path d="M42.5000017,0 C28.4176248,0 17.0000017,11.5851692 17.0000017,25.8741915 C17.0000017,30.2426174 18.0773762,34.3544577 19.9643759,37.9660636 L2.23337808,55.952939 L2.24825307,55.9658761 C0.809256938,57.3930879 -0.00134837842,59.3490529 1.68369652e-06,61.3908315 C1.68369652e-06,65.5932592 3.35747558,69 7.49912744,69 C9.59225218,69 11.481377,68.1245899 12.8435018,66.7166026 L12.8392518,66.7122903 L30.5638746,48.7297272 C34.1253741,50.6508859 38.1841236,51.7483829 42.5000017,51.7483829 C56.5823713,51.7483829 68.0000017,40.1632136 68.0000017,25.8741915 C68.0000017,11.5851693 56.5823713,0 42.5000017,0 Z M10.1893771,64.0213743 C9.48808477,64.7684151 8.51591427,65.1915075 7.49912744,65.1921821 C6.50459544,65.1927535 5.55060392,64.7922807 4.84716424,64.0789229 C4.14372455,63.3655651 3.74850294,62.3978016 3.74850294,61.3886754 C3.74850294,60.3148964 4.19475291,59.3553951 4.90237775,58.6589482 L4.88325275,58.6416987 L22.0235006,41.2499297 C23.5211298,43.2985038 25.3067052,45.1131871 27.32325,46.6360739 L10.1893771,64.0213743 L10.1893771,64.0213743 Z M42.4999981,47.4381738 C30.7657495,47.4381738 21.2500007,37.7806319 21.2500007,25.8763476 C21.2500007,13.9699072 30.7657495,4.3145214 42.4999981,4.3145214 C54.2321216,4.3145214 63.7500007,13.9699072 63.7500007,25.8763476 C63.7500007,37.7806319 54.2321217,47.4381738 42.4999981,47.4381738 Z" id="形状" fill="#333333" fill-rule="nonzero"></path>
                  <path d="M41.9335822,11 C33.6859925,11 27,17.6859925 27,25.9335822 C27,26.5225916 27.477675,27 28.0666844,27 C28.6556939,27 29.1332216,26.5225916 29.1333689,25.9335822 C29.1333689,18.8642196 34.8642196,13.1333689 41.9335822,13.1333689 C42.5225916,13.1332216 43,12.6556939 43,12.0666844 C43,11.477675 42.5225916,11 41.9335822,11 L41.9335822,11 Z" id="路径" fill="#333333" fill-rule="nonzero"></path>
              </g>
          </g>
      </g>
  </g>
</svg>`,
  empty_svg_signal: `<svg viewBox="0 0 165 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>占位-无信号</title>
  ${defsNode}
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="占位-无信号">
          ${emptyImgBg}
          <g filter="url(#filter-7)" id="编组" opacity="0.8">
              <g transform="translate(40.000000, 60.000000)">
                  <path d="M44.5,7.02645499 C58.4166667,7.02645499 72.5,12.1904762 83.125,22.984127 C84.4583333,24.3386243 86.6666667,24.3386243 88,22.984127 C88.6666667,22.3492064 89,21.4179895 89,20.4867725 C89,19.5555555 88.625,18.6666667 88,17.989418 C76.0416666,5.84126983 60.1666667,0 44.5,0 C28.8333334,0 12.9583334,5.84126983 1,17.989418 C0.333333328,18.6243386 0,19.5555556 0,20.4867725 C0,21.4179894 0.374999994,22.3068783 1,22.984127 C2.3333333,24.3386243 4.54166667,24.3386243 5.87499998,22.984127 C16.5,12.1904762 30.5833333,7.02645507 44.5,7.02645499 Z" id="路径" fill="#CDCDCD" fill-rule="nonzero"></path>
                  <path d="M78.1746955,34.7759718 C77.0005956,36.159479 74.9459206,36.3691013 73.4782956,35.3209897 C64.420953,28.6550004 54.7765604,23.9175362 44,23.9175362 C33.2234396,23.9175362 23.579047,28.6130759 14.5217044,35.3209897 C13.0540794,36.4110257 11.0413366,36.159479 9.82530448,34.7759718 C9.19632237,34.0213315 8.90279738,33.1409178 9.0285938,32.1347307 C9.15439023,31.1285436 9.61564378,30.3319789 10.4123545,29.7450364 C20.6857292,22.1567088 31.7558146,17 44,17 C56.2441854,17 67.3142708,22.1567088 77.5876455,29.7450364 C78.3843562,30.3319788 78.8456098,31.1285436 78.9714062,32.1347307 C79.0972026,33.1409178 78.8036776,34.0213315 78.1746955,34.7759718 Z" id="路径" fill="#CDCDCD" fill-rule="nonzero"></path>
                  <path d="M44.2669129,40.1576292 C50.0655027,40.1576292 55.2800618,41.6325346 60.2860386,44.5389659 C61.1620845,42.1964691 62.8724599,40.2443884 65,39.1165195 C58.5339467,35.0388398 51.775878,33 44.2669129,33 C35.5481701,33 27.8306226,35.732913 20.4468068,41.198739 C19.6124774,41.806053 19.1535962,42.6302648 19.0284467,43.6713745 C18.9032973,44.7124842 19.1953126,45.6234552 19.8210597,46.4476671 C20.9891209,47.8791929 22.9497952,48.0960908 24.4098717,47.0549811 C30.6256262,42.4567465 36.9665301,40.1576293 44.2669129,40.1576292 Z M44.2669129,56.2080706 L44.1417635,56.2080706 C40.6375798,56.2080706 37.2585455,57.2925599 34.4218253,59.2446406 C32.9617487,60.2423707 31.0427909,59.9820933 29.9164462,58.593947 C29.2489827,57.7697352 28.9986838,56.8153846 29.1238332,55.7742749 C29.2489825,54.7331652 29.7912968,53.8655738 30.6256263,53.3016393 C34.6304077,50.5687263 39.3026527,49.0504413 44.18348,49.0504413 L44.4337788,49.0504413 C48.4385603,49.0504413 52.3599087,50.0481715 55.8223759,51.9568726 C54.9880465,52.8678436 54.4457323,54.0824716 54.4457323,55.4272384 L54.4457323,59.4615384 C54.3622994,59.4181589 54.23715,59.3313997 54.153717,59.2880201 C51.2752804,57.2925599 47.8962461,56.2514501 44.4337788,56.2514502 L44.3086294,56.2514502 L44.2669129,56.2080706 Z M39.0940703,70.43657 C39.0106374,72.3886507 40.0118327,74.2539723 41.6387751,75.2517024 C43.2657175,76.2494325 45.3098248,76.2494325 46.9367672,75.2517024 C48.5637096,74.2539723 49.5231885,72.3886507 49.4814721,70.43657 C49.3980391,67.5301387 47.1036331,65.2310215 44.3086294,65.2310215 C41.5136258,65.2310215 39.2192197,67.5301387 39.1357868,70.43657 L39.0940703,70.43657 Z" id="形状" fill="#CDCDCD" fill-rule="nonzero"></path>
                  <path d="M78.7606707,51.4347826 L78.3902439,51.4347826 L78.3902439,49.3913043 C78.3902439,44.2173913 74.3978658,40 69.5,40 C64.6021342,40 60.6097561,44.2173913 60.6097561,49.3913043 L60.6097561,51.4347826 L60.2393293,51.4347826 C57.8932927,51.4347826 56,53.4347826 56,55.9130435 L56,72.5217391 C56,75 57.8932927,77 60.2393293,77 L78.7606707,77 C81.1067073,77 83,75 83,72.5217391 L83,55.9130435 C83,53.4347826 81.1067073,51.4347826 78.7606707,51.4347826 Z M64.2728659,49.3913043 C64.2728659,45.5652174 67.3185976,43.8695652 69.5,43.8695652 C71.6814024,43.8695652 74.7271341,45.5652174 74.7271341,49.3913043 L74.7271341,51.4347826 L64.2728659,51.4347826 L64.2728659,49.3913043 Z M79.3780488,71.1304348 C79.3780488,71.6521739 79.1722561,72.173913 78.8018293,72.5652174 C78.4314024,72.9565217 77.9375,73.173913 77.4435976,73.173913 L61.597561,73.173913 C61.1036585,73.173913 60.6097561,72.9565217 60.2393293,72.5652174 C59.8689024,72.173913 59.6631098,71.6521739 59.6631098,71.1304348 L59.6631098,57.3043478 C59.6631098,56.1739131 60.527439,55.2608695 61.597561,55.2608695 L77.4435976,55.2608695 C77.9375,55.2608695 78.4314024,55.4782608 78.8018293,55.8695653 C79.1722561,56.2608695 79.3780488,56.7826087 79.3780488,57.3043478 L79.3780488,71.1304348 Z" id="形状" fill="#000000" fill-rule="nonzero"></path>
              </g>
          </g>
      </g>
  </g>
</svg>`,
  empty_svg_text: `<svg viewBox="0 0 165 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>占位-文本</title>
  ${defsNode}
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="占位-文本">
          ${emptyImgBg}
          <g filter="url(#filter-7)" id="编组" opacity="0.8">
              <g transform="translate(40.000000, 60.000000)">
                  <path d="M75.59375,60.0790274 L75.59375,72.9209726 L6.40625,72.9209726 L6.40625,60.0790274 L75.59375,60.0790274 M77.1953125,54 L4.8046875,54 C2.15410156,54 0,56.0440729 0,58.5592705 L0,74.4407295 C0,76.9559271 2.15410156,79 4.8046875,79 L77.1953125,79 C79.8458984,79 82,76.9559271 82,74.4407295 L82,58.5592705 C82,56.0440729 79.8458984,54 77.1953125,54 Z" id="形状" fill="#000000" fill-rule="nonzero"></path>
                  <path d="M53.5,6.21761658 L53.5,53.7823834 L14.5,53.7823834 L14.5,6.21761658 L53.5,6.21761658 M55.125,0 L12.875,0 C10.185625,0 8,2.09067358 8,4.66321244 L8,55.3367876 C8,57.9093264 10.185625,60 12.875,60 L55.125,60 C57.814375,60 60,57.9093264 60,55.3367876 L60,4.66321244 C60,2.09067358 57.814375,0 55.125,0 Z" id="形状" fill="#000000" fill-rule="nonzero"></path>
                  <path d="M64.5403727,15.1302682 L64.5403727,53.0613027 L59.3726708,53.0613027 L59.3726708,15.1302682 L64.5403727,15.1302682 M66.1552795,9 L57.757764,9 C55.0850932,9 52.9130435,11.0613027 52.9130435,13.5977011 L52.9130435,54.5938697 C52.9130435,57.1302682 55.0850932,59.1915709 57.757764,59.1915709 L66.1552795,59.1915709 C68.8279503,59.1915709 71,57.1302682 71,54.5938697 L71,13.5977011 C71,11.0613027 68.8279503,9 66.1552795,9 Z M29.4161491,16.2796935 L22.2298137,16.2796935 C20.4453416,16.2796935 19,14.908046 19,13.2145594 C19,11.5210728 20.4453416,10.1494253 22.2298137,10.1494253 L29.4161491,10.1494253 C31.2006211,10.1494253 32.6459627,11.5210728 32.6459627,13.2145594 C32.6459627,14.908046 31.2006211,16.2796935 29.4161491,16.2796935 Z M44.6770186,27.1609195 L22.2298137,27.1609195 C20.4453416,27.1609195 19,25.789272 19,24.0957854 C19,22.4022989 20.4453416,21.0306513 22.2298137,21.0306513 L44.6770186,21.0306513 C46.4614907,21.0306513 47.9068323,22.4022989 47.9068323,24.0957854 C47.9068323,25.789272 46.4614907,27.1609195 44.6770186,27.1609195 Z M44.5962733,38.0421456 L22.2298137,38.0421456 C20.4453416,38.0421456 19,36.6704981 19,34.9770115 C19,33.2835249 20.4453416,31.9118774 22.2298137,31.9118774 L44.5962733,31.9118774 C46.3807453,31.9118774 47.826087,33.2835249 47.826087,34.9770115 C47.826087,36.6704981 46.3807453,38.0421456 44.5962733,38.0421456 Z M38.5403727,48.9233716 L22.2298137,48.9233716 C20.4453416,48.9233716 19,47.5517241 19,45.8582375 C19,44.164751 20.4453416,42.7931034 22.2298137,42.7931034 L38.5403727,42.7931034 C40.3248447,42.7931034 41.7701863,44.164751 41.7701863,45.8582375 C41.7701863,47.5517241 40.3248447,48.9233716 38.5403727,48.9233716 Z M42.9813665,69 L37.8136646,69 C36.0291925,69 34.5838509,67.6283525 34.5838509,65.9348659 C34.5838509,64.2413793 36.0291925,62.8697318 37.8136646,62.8697318 L42.9813665,62.8697318 C44.7658385,62.8697318 46.2111801,64.2413793 46.2111801,65.9348659 C46.2111801,67.6283525 44.7658385,69 42.9813665,69 Z" id="形状" fill="#000000" fill-rule="nonzero"></path>
              </g>
          </g>
      </g>
  </g>
</svg>`,
  result_svg_ban: `<svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>结果-禁止</title>
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="结果-禁止">
          <g>
              <path d="M99.5396371,0.00631004464 C44.66139,0.00631004464 0.173143865,44.7499167 0.173143865,99.9401549 C0.173143865,155.130621 44.6613898,199.874228 99.5396371,199.874228 C154.416294,199.874228 198.90454,155.130393 198.90454,99.9401549 C198.90454,44.7499167 154.416294,0.00631004464 99.5396371,0.00631004464 Z M149.275462,107.13482 L49.8022226,107.13482 L49.8022226,92.7457183 L149.275462,92.7457183 L149.275462,107.13482 Z" id="形状" fill="rgba(241, 54, 66)" fill-rule="nonzero"></path>
          </g>
      </g>
  </g>
</svg>`,
  result_svg_error: `<svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>结果-失败</title>
  <g id="页面-1" stroke="none" stroke-width="1">
      <g id="结果-失败">
          <g>
              <path d="M170.648494,29.3009625 C131.658473,-9.68905938 68.4284283,-9.68905938 29.4381779,29.3011908 C-9.55298594,68.2923549 -9.55344286,131.522628 29.4368074,170.51265 C68.4281998,209.503814 131.658473,209.503585 170.649637,170.512421 C209.639658,131.522399 209.639658,68.2923549 170.648494,29.3009625 Z M135.295093,145.573444 L100.170107,110.448687 L65.1561326,145.462662 L55.0665163,135.373046 L90.0807194,100.359071 L54.5576042,64.8361839 L64.6794275,54.7145893 L100.202314,90.2374761 L135.829131,54.6106596 L145.923772,64.7053011 L110.296956,100.332118 L145.414175,135.454133 L135.295093,145.573444 Z" id="形状" fill="rgba(241, 54, 66)" fill-rule="nonzero"></path>
          </g>
      </g>
  </g>
</svg>`,
  result_svg_question: `<svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>结果-疑问</title>
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="结果-疑问">
          <g>
              <path d="M100.06359,0.180635838 C44.8764535,0.180635838 0.136264535,44.662211 0.136264535,99.5303468 C0.136264535,154.398483 44.8764535,198.880058 100.06359,198.880058 C155.250727,198.880058 199.990916,154.398483 199.990916,99.5303468 C199.990916,44.662211 155.250727,0.180635838 100.06359,0.180635838 Z M100.199855,167.268786 C94.681141,167.268786 90.2071221,162.820629 90.2071221,157.333815 C90.2071221,151.847001 94.681141,147.398844 100.199855,147.398844 C105.718568,147.398844 110.192587,151.847001 110.192587,157.333815 C110.192587,162.820629 105.718568,167.268786 100.199855,167.268786 Z M133.561955,98.175578 C127.452762,105.649386 118.958939,110.955564 109.556686,113.145773 L109.556686,126.648302 C109.556686,132.135116 105.082667,136.583273 99.5639535,136.583273 C94.0452398,136.583273 89.5712209,132.135116 89.5712209,126.648302 L89.5712209,112.671604 C89.5712209,108.291185 91.0928416,104.001084 93.8635538,100.569003 C96.6115552,97.1820809 100.495094,94.7886561 104.787427,93.8403179 C109.96548,92.6887645 114.666606,89.7760116 118.050509,85.6439668 C121.502544,81.3990246 123.342115,76.2509032 123.342115,70.7866691 C123.342115,64.4869942 120.866642,58.548591 116.369913,54.077854 C111.873183,49.6071171 105.922965,47.1459538 99.5639535,47.1459538 C86.4598474,47.1459538 75.8085029,57.7357298 75.8085029,70.7640896 C75.8085029,76.2509032 71.334484,80.6990607 65.8157703,80.6990607 C60.2970567,80.6990607 55.8230378,76.2509032 55.8230378,70.7640896 C55.8230378,46.7846821 75.4451308,27.2760116 99.5639535,27.2760116 C111.237282,27.2760116 122.229288,31.7919075 130.496003,40.0334176 C138.762718,48.2523483 143.304869,59.1808165 143.304869,70.7866691 C143.304869,80.7442197 139.852834,90.453396 133.561955,98.175578 Z" id="形状" fill="rgba(216, 216, 216)" fill-rule="nonzero"></path>
          </g>
      </g>
  </g>
</svg>`,
  result_svg_success: `<svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>结果-成功</title>
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="结果-成功">
          <g>
              <path d="M100,200 C44.76875,200 0,155.23125 0,100 C0,44.76875 44.76875,0 100,0 C155.23125,0 200,44.76875 200,100 C200,155.23125 155.23125,200 100,200 Z M90.31875,126.3375 L61.70625,97.3875 L42.85625,115.40625 C56.56875,122.78125 75.79375,136.26875 92.25,157.14375 C103.875,135.28125 139.7125,90.5625 157.14375,86.58125 C154.33125,75.30625 152.7375,54.15625 157.14375,42.85625 C121.39375,66.43125 90.31875,126.3375 90.31875,126.3375 Z" id="形状" fill="rgba(58,209,154)" fill-rule="nonzero"></path>
          </g>
      </g>
  </g>
</svg>`,
  result_svg_warn: `<svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>结果-警告</title>
  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="结果-警告">
          <g>
              <path d="M99.5529263,0.136264535 C44.6847905,0.136264535 0.203215318,44.8764535 0.203215318,100.06359 C0.203215318,155.250727 44.6847905,199.990916 99.5529263,199.990916 C154.421062,199.990916 198.902637,155.250727 198.902637,100.06359 C198.902637,44.8764535 154.443642,0.136264535 99.5529263,0.136264535 Z M99.7109827,160.655887 C94.2241691,160.655887 89.7760116,156.181868 89.7760116,150.663154 C89.7760116,145.14444 94.2241691,140.670422 99.7109827,140.670422 C105.197796,140.670422 109.645954,145.14444 109.645954,150.663154 C109.645954,156.181868 105.197796,160.655887 99.7109827,160.655887 L99.7109827,160.655887 Z M115.358562,52.6208212 L115.358562,52.6662427 C115.335983,54.0515988 115.132767,55.3915334 114.794075,56.6633358 L105.89776,118.640988 C105.89776,122.161156 103.075325,125 99.5755058,125 C96.0756864,125 93.2532514,122.161156 93.2532514,118.640988 L84.3569364,56.6633358 C83.9956647,55.3915334 83.8150289,54.0515988 83.7924494,52.6662427 L83.7924494,52.6208212 L83.7924494,52.3937137 C83.7924494,43.6046512 90.8598266,36.4961846 99.5980853,36.4961846 C108.336344,36.4961846 115.403721,43.6046512 115.403721,52.3937137 C115.358562,52.4618459 115.358562,52.5299782 115.358562,52.6208212 Z" id="形状" fill="rgba(247,187,10)" fill-rule="nonzero"></path>
          </g>
      </g>
  </g>
</svg>`,
};

export default icons;