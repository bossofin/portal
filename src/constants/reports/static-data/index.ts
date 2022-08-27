import { karBuyumesi } from './buyume-orani/kar-buyumesi';
import { returnRaporu } from './buyume-orani/return-raporu';
import { satisBuyumesi } from './buyume-orani/satis-buyumesi';
import { alacakDevirHizi } from './faaliyet/alacak-devir-hizi';
import { alacakTahsilSuresi } from './faaliyet/alacak-tahsil-suresi';
import { borcDevirHizi } from './faaliyet/borc-devir-hizi';
import { borcOdemeSuresi } from './faaliyet/borc-odeme-suresi';
import { isletmeSermayesiDongusu } from './faaliyet/isletme-sermayesi-dongusu';
import { stokDevirHizi } from './faaliyet/stok-devir-hizi';
import { stokDevirSuresi } from './faaliyet/stok-devir-suresi';
import { cariOran } from './likidite/cari-oran';
import { likiditeOran } from './likidite/likidite-oran';
import { nakitOran } from './likidite/nakit-oran';
import { netIsletmeSermayesi } from './likidite/net-isletme-sermayesi';
import { brutKarMarji } from './operasyonel-karlilik/brut-kar-marji';
import { faaliyetGiderlerininNetSatislaraOrani } from './operasyonel-karlilik/faaliyet-giderlerinin-net-satislara-orani';
import { faaliyetKarMarji } from './operasyonel-karlilik/faaliyet-kar-marji';
import { netKarMarji } from './operasyonel-karlilik/net-kar-marji';
import { aktifKarlilik } from './varlik-ve-kaynak-karlilik/aktif-karlilik';
import { ozkaynakKarlilik } from './varlik-ve-kaynak-karlilik/ozkaynak-karlilik';
import { aktifDevirHizi } from './varlik-ve-kaynak/aktif-devir-hizi';
import { borclanmaOrani } from './varlik-ve-kaynak/borclanma-orani';
import { faizKarsilamaGucu } from './varlik-ve-kaynak/faiz-karsilama-gucu';
import { finansalBorcKarsilamaOrani } from './varlik-ve-kaynak/finansal-borc-karsilama-orani';
import { kaldiracOrani } from './varlik-ve-kaynak/kaldirac-orani';
import { sabitKiymetOrani } from './varlik-ve-kaynak/sabit-kiymet-orani';

export const chartStaticData = {
  likidite: {
    cariOran,
    likiditeOran,
    nakitOran,
    netIsletmeSermayesi,
  },
  faaliyet: {
    alacakDevirHizi,
    alacakTahsilSuresi,
    borcDevirHizi,
    borcOdemeSuresi,
    isletmeSermayesiDongusu,
    stokDevirHizi,
    stokDevirSuresi,
  },
  varlikVeKaynak: {
    aktifDevirHizi,
    borclanmaOrani,
    faizKarsilamaGucu,
    finansalBorcKarsilamaOrani,
    kaldiracOrani,
    sabitKiymetOrani,
  },
  varlikVeKaynakKarlilik: {
    ozkaynakKarlilik,
    aktifKarlilik,
  },
  operasyonelKarlilik: {
    brutKarMarji,
    faaliyetGiderlerininNetSatislaraOrani,
    faaliyetKarMarji,
    netKarMarji,
  },
  returnRaporu: {
    returnRaporu,
  },
  buyumeRaporu: {
    karBuyumesi,
    satisBuyumesi,
  },
};
