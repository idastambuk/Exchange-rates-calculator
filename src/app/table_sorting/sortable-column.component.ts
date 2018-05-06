import { Directive, Input, OnInit, ElementRef, Renderer } from "@angular/core";

@Directive({selector: '[sortableColumn]'})

export class SortableColumnComponent implements OnInit {
    @Input() data: any[];
    @Input('sortKey') key: any;
    private toggleSort: boolean = false;

    constructor (private el: ElementRef, private renderer: Renderer) {
    }

    ngOnInit () {
        this.el.nativeElement.setAttribute("class", "asc");
        this.renderer.listen(this.el.nativeElement, 'click', (event) => {
       
        let parentNode = this.el.nativeElement.parentNode;
        let children   = parentNode.children;

        if (this.data && this.key) {
            let sortedData: any = this.sortArray();
        }
        this.toggleSort = !this.toggleSort;
        })
    }

  sortArray (): Array<any> {
    let tempArray: Array<any> = this.data;
    tempArray.sort((a, b) => {
      let aKey = a[this.key];
        let str1: string = a[this.key].toLowerCase();
        let str2: string = b[this.key].toLowerCase();
        if (this.toggleSort) {
            this.el.nativeElement.setAttribute("class", "asc");
            if (str1 < str2) {
                return -1;
            }
            if (str1 > str2) {
                return 1;
            }
        }
        else {
            this.el.nativeElement.setAttribute("class", "desc");
            if (str1 > str2) {
                return -1;
            }
            if (str1 < str2) {
                return 1;
            }
        }
      return 0;
    });
    return tempArray;
  }
}