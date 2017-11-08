import { BaseModel, HalDoc } from 'ngx-prx-styleguide';
import { Observable } from 'rxjs/Observable';

export class SponsorModel extends BaseModel {
  public id: number;
  public notes: string;
  public name: string;
  public billingInfo: string;

  SETABLE = [];

  VALIDATORS = {};

  constructor(sponsor: HalDoc, loadRelated = true) {
    super();
    this.init(null, sponsor, loadRelated);
  }

  key(): string {
    if (this.doc) {
      return `prx.sponsor.${this.doc.id}`;
    }
  }

  related(): {} {
    return {};
  }

  decode(): void {
    this.id = this.doc['id'];
    this.name = this.doc['name'];
    this.notes = this.doc['notes'];
    this.billingInfo = this.doc['billing_info'];
  }

  encode(): {} {
    return {}; // sponsors are read only
  }

  saveNew(data: {}): Observable<HalDoc> {
    return Observable.throw(new Error('Cannot directly create a jingle sponsor'));
  }
}
