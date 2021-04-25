module.exports = {
  title: '阳少的工具站',
  description: '开源项目书籍站',
  plugins: [
    ["vuepress-plugin-code-copy", {
      selector: String,
      align: String,
      color: String,
      backgroundTransition: Boolean,
      backgroundColor: String,
      successText: String
    }]
  ],
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-5610692106356463",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],
    [
      "script",
      {},
      `
	var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?de17fc97e10b406c304e498ec864756f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`
    ]
  ],
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
	  {
		text: '文档',
		link: '/guide/file/'
	  },
      {
        text: '随笔',
        ariaLabel: 'menu',
        items: [{
            text: '我常用的docker容器',
            link: '/guide/docker/'
          },
          {
            text: '常用docker-compose',
            link: '/guide/docker-compose/'
          },
          {
            text: '常用spring boot 配置',
            link: '/guide/boot-config/'
          }
        ]
      }, {
        text: 'spring boot',
        ariaLabel: 'spring boot Menu',
        items: [{
          text: 'spring boot 基础',
          link: '/spring-boot/chapter-1/'
        }]
      }
    ],
    sidebar: {
      '/guide/docker/': [
        '',
        'delete',
        'push',
        'mysql',
        'Docker',
        'nginx',
        'ui'
      ],
      '/guide/docker-compose/': [
        '',
        'elk',
      ],
	   '/guide/boot-config/': [
        '',
        'jackson',
		'mybatis-plus',
		'mvc'
      ],
      '/spring-boot/chapter-1/': [
        '',
        'structure'
      ],
	  '/guide/file/': [
		''
	  ]
    }
  }
}