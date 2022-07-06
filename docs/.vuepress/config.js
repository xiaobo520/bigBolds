module.exports = {
    title: 'bigBolds blog',  // 设置网站标题
    description : 'Adroi',
    base : '/',
    themeConfig : {
      nav : [
          { text: '简介', link: '/language/chinese/' },
        //   { text: '接口字段定义', link: '/api' },
        //   { text: '附录：错误码', link: '/error' }
      ],
      sidebar: { //侧边栏
        '/language/chinese/': [
            '',  //该目录下的README.md文件
        ],

        '/language/english/': [
            '',
            '',  //该目录下的README.md文件
        ]
      },
      sidebarDepth: 2,//左侧导航显示的层级
    lastUpdated: 'Last Updated'
    }
  }