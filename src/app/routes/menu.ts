export function menu() {
  const menuItems = [];
    menuItems.push({
      text: '主页',
      heading: true
    })
    menuItems.push({
      text: '随笔',
      link: '/users',
      icon: 'icon-user'
    })
    menuItems.push({
      text: '论坛',
      link: '/card',
      icon: 'icon-credit-card'
    })
    menuItems.push({
        text: '关于我',
        heading: true
      },
      {
        text: '生活',
        link: '/merchants',
        icon: 'icon-basket'
      },
      {
        text: '健康',
        link: '/purchase',
        icon: 'icon-list'
      },
      {
        text: '学习',
        link: '/recharge',
        icon: 'icon-list'
      },
      {
        text: '娱乐',
        link: '/fullPage',
        icon: 'icon-calendar'
      },
      {
        text: 'dialog',
        link: '/dialog',
        icon: 'icon-chart'
      },
      {
        text: '名称',
        link: '/name',
        icon: 'icon-chart'
      })
  return menuItems;
}

