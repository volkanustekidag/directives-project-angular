import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(conditon:boolean){
    if (!conditon) {
      this.vcREf.createEmbeddedView(this.templateRef);
    } else {
      this.vcREf.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcREf: ViewContainerRef) { }

}
