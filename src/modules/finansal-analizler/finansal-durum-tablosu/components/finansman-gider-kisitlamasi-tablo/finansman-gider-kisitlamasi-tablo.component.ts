import { Component, OnInit } from '@angular/core';
import { FinansalDurumTablosuApiResponse } from '@finanaslAnalizler/models/finansal-durum-tablosu-api-response.interface';

@Component({
  selector: 'app-finansman-gider-kisitlamasi-tablo',
  templateUrl: './finansman-gider-kisitlamasi-tablo.component.html',
  styleUrls: ['./finansman-gider-kisitlamasi-tablo.component.scss'],
  inputs: ['giderKisitlamaTabloData'],
  host: {
    class: 'col-lg-4',
  },
})
export class FinansmanGiderKisitlamasiTabloComponent implements OnInit {
  giderKisitlamaTabloData: FinansalDurumTablosuApiResponse;
  constructor() {}

  ngOnInit(): void {}
}
