import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProvinceService } from '../../services/province.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  searchForm = this.fb.group({
    province: ['']
  });

  items = [];

  constructor(
    private ps: ProvinceService,
    private fb: FormBuilder) { }

  ngOnInit(): void {}

  /**
   * On key down search for a province
   */
  onKeydown(): void {
    let prov = this.searchForm.value.province;
    if (prov !== '') {
      this.ps.search(prov).subscribe(resp => {
        this.items = resp.provincias;
      });
    }
  }

  /**
   * Generate a full url for maps
   * @param c centroide
   */
  getMapUrl(c):string {
    return `https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lon}`;
  }
}
