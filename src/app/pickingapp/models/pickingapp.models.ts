export interface PickCriteria {
  pickType: string[],
  pickFor: object,
  pickUsing: object,
  pickLocation: object,
  pickedBy: string
}

export class Pick {
  actual_pick_qty: number
  barcode1: string
  barcode2: string
  box_quantity: number
  description: string
  from_locator_code: string
  ispicked: string
  isshipped: string
  item_code: string
  pick_quantity: number
  pick_type: string
  picked_by: string

    constructor(obj?: any) {
    this.actual_pick_qty = obj.actual_pick_qty
    this.barcode1 = obj.barcode1
    this.barcode2 = obj.barcode2
    this.box_quantity = obj.box_quantity
    this.description = obj.description
    this.from_locator_code = obj.from_locator_code
    this.ispicked = obj.ispicked
    this.isshipped = obj.isshipped
    this.item_code = obj.item_code
    this.pick_quantity = obj.pick_quantity
    this.pick_type = obj.pick_type
    this.picked_by = obj.picked_by  
  }

  numberBoxes(): number {
    let numBoxes = this.pick_quantity/this.box_quantity
    return numBoxes;
  }
}


/* FOR TESTING PICK SCREEN ONLY */
const pickObject = {
  pick_quantity: 576,
  actual_pick_qty: null,
  barcode1: 'DDC999812',
  barcode2: 'DDC999812',
  box_quantity: 576,
  description: 'Truth About Alcohol Booklet - French',
  from_locator_code: 'SW.A.1.5F',
  ispicked: null,
  isshipped: null,
  item_code: 'TAD-ALCOHOL.FR.BKLT',
  pick_type: 'FB',
  picked_by: null
};

export let testPick = new Pick(pickObject);
