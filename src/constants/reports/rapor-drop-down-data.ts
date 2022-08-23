import { ReportList } from '@raporlarModel/report-list.interface';
import { faaliyetRaporu } from './faaliyet-raporu';
import { likiditeRaporu } from './likidite-raporu';
import { operasyonelKarlilikRaporu } from './operasyonel-karlilik-raporu';
import { varlikVeKaynakKarlilikRaporu } from './varlik-ve-kaynak-karlilik-raporu';
import { varlikVeKaynakRaporu } from './varlik-ve-kaynak-raporu';

export const reportList: ReportList[] = [
  {
    title: 'Likidite Raporu',
    url: 'raporlar/likidite-raporu',
    children: likiditeRaporu,
    name: 'likiditeRaporu',
  },
  {
    title: 'Faaliyet Raporu',
    url: 'raporlar/faaliyet-raporu',
    children: faaliyetRaporu,
    name: 'faaliyetRaporu',
  },
  {
    title: 'Varlık ve Kaynak Raporu',
    url: 'raporlar/varlik-ve-kaynak-raporu',
    children: varlikVeKaynakRaporu,
    name: 'varlikVeKaynakRaporu',
  },
  {
    title: 'Varlık ve Kaynak Karlılık Raporu',
    url: 'raporlar/varlik-ve-kaynak-karlilik-raporu',
    children: varlikVeKaynakKarlilikRaporu,
    name: 'varlikVeKaynakKarlilikRaporu',
  },
  {
    title: 'Operasyonel Karlılık Raporu',
    url: 'raporlar/operasyonel-karlilik-raporu',
    children: operasyonelKarlilikRaporu,
    name: 'operasyonelKarlilikRaporu',
  },
  {
    title: 'Büyüme Raporu',
    url: 'raporlar/buyume-raporu',
    children: [],
    name: '',
  },
  {
    title: 'Sonuç Raporu',
    url: 'raporlar/sonuc-raporu',
    children: [],
    name: '',
  },
];
