import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musteri-ciro-siralamasi',
  templateUrl: './musteri-ciro-siralamasi.component.html',
  styleUrls: ['./musteri-ciro-siralamasi.component.scss'],
})
export class MusteriCiroSiralamasiComponent implements OnInit {
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: '5423' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: '2433' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: '215' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: '321' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: '21054' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: '20154' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: '2154' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: '2424' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() {}

  ngOnInit(): void {}
}
