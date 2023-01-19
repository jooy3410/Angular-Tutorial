import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//데코레이터 함수
@Component({

  //컴포넌트의 css엘리멘트 셀렉터
  selector: 'app-heroes',
  //컴포넌트 템플릿 파일의 위치
  templateUrl: './heroes.component.html',
  //컴포넌트 css 스타일 파일의 위치
  styleUrls: ['./heroes.component.css']

})

export class HeroesComponent implements OnInit {
  //컴포넌트의 hero프로퍼티를  Hero 타입으로 리팩토링한다. 
  //이때 id 를 1로, 이름을 Windstorm으로 초기화한다.
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };



  constructor() { }

  // ngOnInit 라이플사이클 hooks함수
  // Angular는 컴포넌트를 생성한 직후 ngOnInit를 호출한다.
  // 그래서 컴포넌트를 초기화하는 로직은 
  //이 메소드에 작성하는 것이 좋다.
  ngOnInit(): void {

  }

}
