import { Input, Output } from "@angular/core";

interface FormDataFunctions {
    add:string;
    edit:string;
}
export class FormComponentStruct {
    _formType:string = 'add';
    functionList:FormDataFunctions;

    constructor(_functions : FormDataFunctions){
        this.functionList = _functions;
    }

    public get formType():string{
        return this._formType;
    }

    @Input('formType') public set formType(type: string) {
        if(['add','edit'].indexOf(type) === -1)
            throw 'Invalid Form Type';
        this._formType = type;
    }


    processForm(post){
        if(this._formType == 'add'){
            this[this.functionList.add](post);
        }else if(this._formType == 'edit'){
            this[this.functionList.edit](post);
        }
    }
}
