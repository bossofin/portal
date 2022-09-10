import { VeriEkleData } from '@analiz/veri-ekle/models/veri-ekle-data.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { hesapKodlari } from '@constants/hesap-kodlari';
@Component({
  selector: 'app-veri-ekle',
  templateUrl: './veri-ekle.component.html',
  styleUrls: ['./veri-ekle.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class VeriEkleComponent implements OnInit {
  kodlar = hesapKodlari;
  displayedColumns = ['hesapKodu', 'calisanSayisi', 'tutar', 'actions'];
  dataSource: VeriEkleData[] = [];
  addForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.addForm = formBuilder.group({
      hesapKodu: formBuilder.control(''),
      calisanSayisi: formBuilder.control(''),
      tutar: formBuilder.control(''),
    });
  }

  ngOnInit(): void {}
  onAdd() {
    const tempDataSource: VeriEkleData[] = makeImmutable(this.dataSource);
    tempDataSource.push({ ...this.addForm.value });
    this.dataSource = tempDataSource;
    this.addForm.reset();
  }
  onDelete(index: number) {
    const tempDataSource: VeriEkleData[] = makeImmutable(this.dataSource);
    const data = tempDataSource.find((item, itemIndex) => itemIndex === index);
    const confirmResult = confirm(
      `${data.hesapKodu} hesap kodlu kaydı silmek istediğinizden emin misiniz?`
    );
    if (confirmResult) {
      tempDataSource.splice(index, 1);
      this.dataSource = makeImmutable(tempDataSource);
    }
  }
}
