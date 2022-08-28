export const mainMenuData = [
  {
    title: 'Anasayfa',
    icon: 'home',
    url: '/',
    exact: true,
  },
  {
    title: 'Analizler',
    icon: 'expand_more',
    url: '',
    children: [
      /* {
        title: 'e-Defter Yükle',
        icon: 'upload_file',
        url: 'analiz/e-defter-yukle',
      }, */
      {
        title: 'Muavin Defter',
        icon: 'preview',
        url: 'analiz/muavin-defter',
      },
      {
        title: 'Mizan Görüntüle',
        icon: 'preview',
        url: 'analiz/mizan/goruntule',
      },
    ],
  },
  {
    title: 'Finansal Analizler',
    icon: 'expand_more',
    url: '',
    children: [
      {
        title: 'Finansal Durum Tablosu',
        icon: 'trending_up',
        url: 'finansal-analizler/finansal-durum-tablosu',
      },
      {
        title: 'Kar-Zarar Tablosu',
        icon: 'trending_up',
        url: 'finansal-analizler/kar-zarar-tablosu',
      },
    ],
  },
  {
    title: 'Raporlar',
    icon: 'expand_more',
    url: '',
    children: [
      {
        title: 'Rapor Oluştur',
        icon: 'start',
        url: 'raporlar',
        exact: true,
      },
      {
        title: 'Büyüme Raporu',
        icon: 'start',
        url: 'buyume-raporu',
        exact: true,
      },
    ],
  },
  {
    title: 'Firmalar',
    icon: 'store',
    url: 'firmalar',
  },
];
