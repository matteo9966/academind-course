import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';
import { Crisis } from '../../crisis';
import { CrisisService } from '../../crisis-center.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private crisisService:CrisisService,private dialogService:DialogService) { }
  crisis$!:Observable<Crisis>;
  crisis!:Crisis;
  editName!:string;
  ngOnInit(): void {
    this.crisis$ = this.activatedRoute.paramMap.pipe(
      switchMap(params=>{
        const id = params.get('id')!;
        return this.crisisService.getSingleCrisis(+id);

      })
    )
    this.activatedRoute.data.subscribe(
      data=>{
        const crisis:Crisis=data['crisis'];
        this.editName = crisis.name;
        this.crisis=crisis;
      }
    )
  }
  gotoCrisis(crisis:Crisis){
    this.router.navigate(['../',{id:crisis.id}])
  }

  canDeactivate():Observable<boolean>|boolean{
    if(!this.crisis){
      return true;
    }
    return this.dialogService.confirm('discard changes??')
  }

}
