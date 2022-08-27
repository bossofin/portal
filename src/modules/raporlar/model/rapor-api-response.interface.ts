import { RaporItem } from './rapor-item.interface';

export interface RaporApiResponse {
  cariOran: RaporItem;
  likiditeOrani: RaporItem;
  nakitOran: RaporItem;
  netIsletmeSermayesi: RaporItem;
  stokDevirHizi: RaporItem;
  stokDevirSuresi: RaporItem;
  alacakDevirHizi: RaporItem;
  alacakTahsilSuresi: RaporItem;
  borcDevirHizi: RaporItem;
  borcOdemeSuresi: RaporItem;
  isletmeSermayeDongusu: RaporItem;
  borclanmaOrani: RaporItem;
  kaldiracOrani: RaporItem;
  faizKarsilamaGucu: RaporItem;
  finansalBorcKarsilamaOrani: RaporItem;
  sabitKiymetOrani: RaporItem;
  aktifDevirHizi: RaporItem;
  ozkaynakKarliligi: RaporItem;
  aktifKarlilik: RaporItem;
  brutKarMarji: RaporItem;
  faaliyetGiderlerininNetSatislaraOrani: RaporItem;
  faaliyetKarMarji: RaporItem;
  netKarMarji: RaporItem;
  returnAnaliz: RaporItem;
}

export type RaporKeys = keyof RaporApiResponse;
