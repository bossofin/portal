import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-confirm',
  templateUrl: './custom-confirm.component.html',
  styleUrls: ['./custom-confirm.component.scss'],
})
export class CustomConfirmComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {}
}
