import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';

  ngOnInit(): void {}
  navigate(link: string) {
    this.router.navigate([{ outlets: { primary: link, sidemenu: link } }], {
      relativeTo: this.route,
    });
  }
}
