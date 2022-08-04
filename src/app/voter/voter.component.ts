import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor() { }
  @Input() nomePartito='';

  @Output() votato = new EventEmitter<boolean>(false);
  haVotato = false;

  ngOnInit(): void {
  }

  onClick(){
    this.votato.emit(true)
    this.haVotato=true;
  }

}
