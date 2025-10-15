import {Component} from '@angular/core';
import {Subscriber} from 'rxjs';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userId: string = '';
  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit():void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.userId = params.get('id') || '';
    })
  }
  ngOnDestroy():void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }
  irAConfiguracion(){
    this.router.navigate(['settings'], {relativeTo: this.route});
  }
}
