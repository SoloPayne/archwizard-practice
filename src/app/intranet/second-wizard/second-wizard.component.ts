import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-second-wizard',
  templateUrl: './second-wizard.component.html',
  styleUrls: ['./second-wizard.component.css']
})
export class SecondWizardComponent implements OnInit {

  outOfJail: any = 'awEnableBackLinks';

  addBacklinks: boolean = true;

  enable() {
this.addBacklinks = !this.addBacklinks;
  }



  constructor() { }

  ngOnInit(): void {
      console.log(this.outOfJail);
  }

}
