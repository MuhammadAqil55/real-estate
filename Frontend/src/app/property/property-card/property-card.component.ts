import{ Component, Input} from '@angular/core';
import { IProperty } from '../IProperty.interface';
@Component({
   selector : 'app-property-card',
   //template:'<h1>Hey Im a card </h1>',
    templateUrl : 'property-card.component.html',
    styleUrls:['property-card.component.css']
   //styles:['h1{font-weight:normal;}']

})
export class PropertyCardComponent{
    @Input() property : IProperty
   

}