import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  myColor: string = '';
  isStyleChanged: boolean = false;
  styleClass: StyleClass = new StyleClass();
  script: string = '<script>alert("This is script")</script>';
  myDiv: string = '<div>this is a div</div>';
  nullItem: any;
  title: string = "Test title"
  isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }


  changeStyle(): void {
    this.isStyleChanged = !this.isStyleChanged;
    this.styleClass = !this.isStyleChanged ? new StyleClass() : new StyleClass('red', 10, 'italic');
  }

  sayHello(username: string): void {
    alert('Hello ' + username);

  }

  enableBtn(password: string): void {
    this.isDisabled = password == '123' ? !this.isDisabled : this.isDisabled;
  }

}

class StyleClass {

  'color': string;
  'font-size.px': number;
  'font-weight': string;

  constructor(color: string = 'blue', fontSize: number = 20, fontWeight: string = 'bold') {
    this.color = color;
    this['font-size.px'] = fontSize;
    this['font-weight'] = fontWeight;
  }

}